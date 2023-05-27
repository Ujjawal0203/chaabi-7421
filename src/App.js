import React from 'react';
import { useSelector } from 'react-redux';
import TypingExercise from './components/TypingExercise';
import './App.css';

function App() {
  const exercise = useSelector((state) => state.exercise);

  return (
    <div className="App">
      <h1>Touch Typing Practice</h1>
      <TypingExercise exercise={exercise} />
    </div>
  );
}

export default App;
