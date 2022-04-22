import React, {Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetTabs from './tabs';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">        

       <Fragment>
          
          <GetTabs></GetTabs>         

       </Fragment>
                       
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
