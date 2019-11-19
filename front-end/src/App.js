import React from 'react';
import { Route } from "react-router-dom";
import FormikNewPlantForm from "./components/FormikNewPlantForm";
import Plant from "./components/Plant";
import PlantList from "./components/PlantList";
import UserProfile from "./components/UserProfile";
import './App.css';
import FormikNewUser from './components/SignUpForm';

function App() {
  return (
    <div className="App">
      <Route path="/add-plant" render={props => <FormikNewPlantForm />} />
      <Route path="/user/:id/plant/:id" render={props => <Plant {...props} />} />
      <Route path="/user/id/plants" render={props => <PlantList {...props} />} />
      <Route path="/userprofile" render={props => <UserProfile />} />
      <Route path='/sign-up' render={props => <FormikNewUser />} />
    </div>
  );
}

export default App;
