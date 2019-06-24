import React from 'react';
import './App.css';
import PersonContainer from './Components/Persons/PersonContainer'
import CustomerContainer from './containers/CustomerContainer'


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col component-box">
         <h3>Example of capturing the input text individually.</h3>
          <PersonContainer/>
        </div>
        <div className="col component-box">
          <h3>Form Example</h3>
          <CustomerContainer/>
        </div>
      </div>
    </div>
  );
}

export default App;
