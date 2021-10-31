import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Navigation from '@/navigations';
import createStore from '@/redux';

const { store, persistor } = createStore();
export { store };

import { StatusBar } from 'react-native';

export default () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        animated
        translucent
        backgroundColor="transparent"
        showHideTransition={'slide'}
      />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </>
  );
};
