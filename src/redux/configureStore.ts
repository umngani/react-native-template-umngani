/* eslint-disable @typescript-eslint/no-var-requires */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import { createNetworkMiddleware, reducer as network } from 'react-native-offline';
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import Reactotron from 'reactotron-react-native';

import rootSaga from '@/sagas';
import ReactotronConfig from '@/config/reactotron';
import { fetchMiddleware } from './middlewares';

// Reducers
import fetch from './fetch';

const storage = createSensitiveStorage({
  keychainService: 'myKeychain',
  sharedPreferencesName: 'mySharedPrefs',
});

const rootPersistConfig: PersistConfig<any> = {
  key: 'root',
  timeout: 10000,
  // storage: AsyncStorage,
  blacklist: ['fetch'],
  storage,
};

export default () => {
  const middleware: any[] = [];
  const enhancers: any[] = [];

  // @ts-ignore
  const sagaMiddkewareConfig = __DEV__ ? { sagaMonitor: Reactotron?.createSagaMonitor() } : {};
  const sagaMiddleware = createSagaMiddleware(sagaMiddkewareConfig);

  const networkMiddleware = createNetworkMiddleware({});

  middleware.push(networkMiddleware);
  middleware.push(sagaMiddleware);
  middleware.push(fetchMiddleware);

  enhancers.push(applyMiddleware(...middleware));
  if (__DEV__ && ReactotronConfig?.createEnhancer) {
    enhancers.push(ReactotronConfig.createEnhancer());
  }

  // const devtoolsConfig = { hostname: 'localhost', port: 8000 };
  // const composeEnhancers = __DEV__ ? composeWithDevTools(devtoolsConfig) : compose;

  // Store
  const reducers = combineReducers({ fetch, network });

  const rootReducer = persistReducer(rootPersistConfig, reducers);

  // const store = createStore(rootReducer, composeEnhancers(...enhancers));
  const store = configureStore({ reducer: rootReducer, enhancers, middleware, devTools: true });
  const persistor = persistStore(store);

  const sagasManager = sagaMiddleware.run(rootSaga);

  return { store, persistor, sagasManager, sagaMiddleware };
};
