import React from 'react';
import { Route } from "react-router-dom";
import FormikNewPlantForm from "./components/FormikNewPlantForm";
import Plant from "./components/Plant";
import PlantList from "./components/PlantList";
import UserProfile from "./components/UserProfile";
import './App.css';
import FormikNewUser from './components/SignUpForm';
import FormikLoginUser from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Route path="/add-plant" render={props => <FormikNewPlantForm />} />
      <Route path="/plant/" render={props => <Plant {...props} />} />
      <Route path="/plantpractice" render={props => <PlantList />} />
      <Route path ="/userprofile" render ={props=> <UserProfile />} />
      <Route path='/sign-up' render={props => <FormikNewUser />} />
      <Route path='/login' render={props => <FormikLoginUser />} />
    </div>
  );
}

export default App;
