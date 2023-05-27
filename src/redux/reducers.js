import { combineReducers } from 'redux';
import { SET_USER_INPUT, CHECK_EXERCISE, GENERATE_EXERCISE } from './types';

const generateExercise = () => {
  const keys = 'asdfjkl;';
  let exercise = '';
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * keys.length);
    exercise += keys[randomIndex];
  }
  return exercise;
};

const checkExercise = () => {
  return true;
};

const initialExercise = generateExercise();
const exerciseReducer = (state = initialExercise, action) => {
  switch (action.type) {
    case GENERATE_EXERCISE:
      return generateExercise();
    default:
      return state;
  }
};

const initialUserInput = '';
const userInputReducer = (state = initialUserInput, action) => {
  switch (action.type) {
    case SET_USER_INPUT:
      return action.payload;
    default:
      return state;
  }
};

const initialIsCompleted = false;
const isCompletedReducer = (state = initialIsCompleted, action) => {
  switch (action.type) {
    case CHECK_EXERCISE:
      return checkExercise();
    case GENERATE_EXERCISE:
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  exercise: exerciseReducer,
  userInput: userInputReducer,
  isCompleted: isCompletedReducer,
});

export default rootReducer;
