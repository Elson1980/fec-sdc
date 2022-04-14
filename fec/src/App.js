import logo from './logo.svg';
import React, {Fragment} from 'react';
import './App.css';
import ListItem from './getData';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Fragment>
         <ListItem></ListItem>

       </Fragment>
      </header>
    </div>
  );
}

export default App;
