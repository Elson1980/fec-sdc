import React, {Fragment} from 'react';
import NavBar from './components/reviews/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reviews from "./components/reviews/reviews.js";



console.log('start')

function App() {
  
  return (
    <>
      <div className="App">
        <div className='navBar'>
          <NavBar/>
        </div>
        <div className='reviews'>
        <Reviews/>
        </div>
      </div>
    
    </>
  );
}

export default App;
