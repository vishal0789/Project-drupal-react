import React from 'react';
import DrupalForm from './components/drupalform';
import Getdrupaldata from './components/getdrupaldata';
import Getcustomdata from './components/getcustomdata';

function App() {
  return (
    <div className="App">
      <br />
      <DrupalForm />
      <br />

      <Getdrupaldata />
      <br />
      <Getcustomdata />
    </div>
  );
}
export default App;
