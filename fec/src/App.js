import logo from './logo.svg';
import React, {Fragment} from 'react';
import './App.css';
import ListItem from './getData';
import NavBar from './navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reviews from "./components/reviews/reviews.js";



console.log('start')

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      
      <Reviews/>
    </div>
  );
}

export default App;
