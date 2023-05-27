import { SET_USER_INPUT, CHECK_EXERCISE, GENERATE_EXERCISE } from './types';

export const setUserInput = (input) => ({
  type: SET_USER_INPUT,
  payload: input,
});

export const checkExercise = () => ({
  type: CHECK_EXERCISE,
});

export const generateExercise = () => ({
  type: GENERATE_EXERCISE,
});
