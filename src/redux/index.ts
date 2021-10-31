import configureStore from './configureStore';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const { store, persistor } = configureStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default () => ({ store, persistor });
