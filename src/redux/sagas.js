import { put, takeEvery } from 'redux-saga/effects';
import { GENERATE_EXERCISE } from './types';
import { generateExercise, setUserInput } from './actions';

function* generateExerciseSaga() {
  const exercise = generateExercise();
  yield put(setUserInput(''));
  yield put({ type: 'SET_EXERCISE', payload: exercise });
}

function* rootSaga() {
  yield takeEvery(GENERATE_EXERCISE, generateExerciseSaga);
}

export default rootSaga;
