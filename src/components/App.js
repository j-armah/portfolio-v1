import React from 'react'
import projects from './data'

function App() {
  return (
    <div className="App">
      <h1> Jeremy's Portfolio</h1>
      <h2> About me </h2>
      <h2> Contacts </h2>
      <h2> Welcome </h2>
      <h2> Projects </h2>
      <p> {projects.flixfix.url}</p>
    </div>
  );
}

export default App;
