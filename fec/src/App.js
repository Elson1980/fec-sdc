import React, {Fragment} from 'react';
import NavBar from './components/reviews/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reviews from "./reviews.js";
import Products from "./Products";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";



console.log('start')

function App() {
  
  return (
    <>
    <RecoilRoot>
      <div className="App">
        <div className='navBar'>
          <NavBar/>
        </div>
        <Products />
        <div className='reviews'>
        <Reviews/>
        </div>
      </div>
    </RecoilRoot>
    
    </>
  );
}

export default App;

