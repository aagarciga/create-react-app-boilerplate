import React from 'react';
import './App.scss';
import Button from './components/customs/Button';
import FileTreeView from './components/views/FileTreeView';

function App() {
  return (
    <div className="App">
      <div>
        <h1>My React (Boilerplate)</h1>
        <h6>by Alex Gárciga</h6>

        <FileTreeView />
        <div>
          <Button primary dark>Get Started</Button>
          &nbsp;
          <Button dark>Read Docs</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
