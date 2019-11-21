import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Plant from "./Plant";
import Nav from "./Nav";
// import FormikNewPlantForm from "./FormikNewPlantForm";

import styled from "styled-components";
import axios from "axios";

const MainContain = styled.div`
  height: 93vh;
  width: 900px;
  margin: 0 auto;
  display: flex;
  // flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const TopDivStyle = styled.div`
  display: flex;
  height: 40px;
  width: 900px;
  margin: 0 auto;
  margin-top: 10px;
`;

const PlantList = props => {
  const [plantList, setPlantList] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    axios
      .get(
        `https://vdtyson-watermyplants.herokuapp.com/plants/username/${username}`
      )
      .then(response => {
        const userID = response.data;
        console.log(userID);
        axios
          .get(
            `https://vdtyson-watermyplants.herokuapp.com/plants/user/${userID}`
          )
          .then(response => {
            console.log(response.data);
            setPlantList(response.data);
            console.log(plantList)
          })
          .catch(error => {
            console.log("Something went wrong!", error, username);
          });
      })
      .catch(error => console.log("ERROR", error));
  }, []);

  const deletePlant = plant => {
    console.log("ID", plantList.id);
    axios
      .delete(
        `https://vdtyson-watermyplants.herokuapp.com/plants/${plant.id}`,
      )
      .then(response => {
        setPlantList(response.data);
      })
      .catch(error => console.log("DELETE", error));
  };

  return (
    <div>
      <Nav />
      <TopDivStyle>
        <h3 className="plant-list">My Plants</h3>
        <Link className="add-plant-button" to="/plantpractice/add-plant">
          <div>Add Plant</div>
        </Link>
      </TopDivStyle>
      <MainContain>
        {plantList.map(plant => (
          <Plant
            plantList={plantList}
            setPlants={setPlantList}
            plant={plant}
            value={plant.id}
            key={plant.id}
            name={plant.nickname}
            species={plant.plantType}
            delete={deletePlant}
          />
        ))}
      </MainContain>
    </div>
  );
};

export default PlantList;
