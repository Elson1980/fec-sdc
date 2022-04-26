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

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetTabs from './components/tabs/tabs';
import Footer from './components/tabs/footer';


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
        <GetTabs>
        </GetTabs> 
        </div>
        <Footer/>
      </div>
    </RecoilRoot>
    
    </>
  );
}

export default App;

