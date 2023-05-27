import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Keyboard from './Keyboard';
import { setUserInput, checkExercise, generateExercise } from '../redux/actions';

const TypingExercise = () => {
  const exercise = useSelector((state) => state.exercise);
  const userInput = useSelector((state) => state.userInput);
  const isCompleted = useSelector((state) => state.isCompleted);
  const dispatch = useDispatch();

  const handleKeyPress = (key) => {
    if (isCompleted) {
      return;
    }

    dispatch(setUserInput(userInput + key));

    if (exercise[userInput.length] === key) {
      dispatch(checkExercise());
    }
  };

  const handleNextExercise = () => {
    dispatch(generateExercise());
  };

  return (
    <div className="TypingExercise">
      <h2>Type the following:</h2>
      <div className="ExerciseContainer">
        <div className="Exercise">{exercise}</div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => dispatch(setUserInput(e.target.value))}
          onKeyDown={(e) => e.preventDefault()}
          onKeyPress={(e) => handleKeyPress(e.key)}
          disabled={isCompleted}
        />
      </div>
      {isCompleted && (
        <button onClick={handleNextExercise}>Next Exercise</button>
      )}
      <Keyboard onKeyPress={handleKeyPress} />
    </div>
  );
};

export default TypingExercise;
