import React from 'react';
import {Route} from "react-router-dom";
import FormikNewPlantForm from "./components/FormikNewPlantForm";
import './App.css';

function App() {
  return (
    <div className="App">
      

  <Route path="/add-plant" render={props => <FormikNewPlantForm/>}/>
    </div>
  );
}

export default App;
