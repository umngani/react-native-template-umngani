import { fork } from 'redux-saga/effects';
import { networkSaga } from 'react-native-offline';

/* ---------------- Types --------------- */
// import { actions as actionsTypes } from '@/constants';

/* ---------------- Sagas --------------- */

/* ------- Connect Types To Sagas ------- */
export default function* root() {
  // Offline
  yield fork(networkSaga);
}
