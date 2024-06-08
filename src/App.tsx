import React from 'react';
import Person from './Person';
import './App.css';
import { Countries } from './Person';
function App() {
  return (
    <Person name={'venu'} age={25} ismarried={true} country={Countries.India} />
  );
}

export default App;
