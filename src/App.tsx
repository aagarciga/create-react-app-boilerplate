import React from 'react';
import './App.scss';
import FileTreeView from './components/views/FileTreeView';

function App() {
  return (
    <div className="App">
      <div>
        <h1>My React (Boilerplate)</h1>
        <h6>by Alex Gárciga</h6>

        <FileTreeView />
      </div>
    </div>
  );
}

export default App;
