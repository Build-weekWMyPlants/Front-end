import React from "react";
import { Route } from "react-router-dom";
import FormikNewPlantForm from "./components/FormikNewPlantForm";
import Plant from "./components/Plant";
import PlantList from "./components/PlantList";
import UserProfile from "./components/UserProfile";

import LoginForm from "./components/LoginForm";
import { PrivateRoute } from "./utils/PrivateRoute";

import "./App.css";
import FormikNewUser from "./components/SignUpForm";

function App() {
  return (
    <div className="App">
      <PrivateRoute path="/plantpractice">
        <Route
          exact path="/plantpractice/add-plant"
          render={props => <FormikNewPlantForm {...props} />}
        />
        <Route path="/plantpractice/plant" render={props => <Plant {...props} />} />
        <Route exact path="/plantpractice" render={props => <PlantList />} />
        <Route path="/plantpractice/userprofile" render={props => <UserProfile />} />
        <Route
          path="/plantpractice/user/:id/plant/:id"
          render={props => <Plant {...props} />}
        />
        <Route
          path="/plantpractice/user/id/plants"
          render={props => <PlantList {...props} />}
        />
      </PrivateRoute>

      <Route exact path="/" render={props => <FormikNewUser {...props} />} />

      <Route path="/sign-up" render={props => <FormikNewUser {...props} />} />
      <Route exact path="/login" render={props => <LoginForm {...props} />} />
    </div>
  );
}

export default App;
