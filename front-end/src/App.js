import React from 'react';
import {Route} from "react-router-dom";
import FormikNewPlantForm from "./components/FormikNewPlantForm";
import './App.css';
import FormikNewUser from './components/SignUpForm';

function App() {
  return (
    <div className="App">
      
  <Route path='/sign-up' render={props => <FormikNewUser />}/>
  <Route path="/add-plant" render={props => <FormikNewPlantForm/>}/>
  {/* <Route path='/login' render={props => <FormikNewUser/>}/> */}
    </div>
  );
}

export default App;
