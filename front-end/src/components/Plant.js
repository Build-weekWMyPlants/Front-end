import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";
import axios from "axios";

const PlantListDiv = styled.div`
  border: 1px solid black;
  height: 400px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // padding-left: 5px;
  align-content: center;
  margin-top: 35px;
`;

const ButtonContain = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-evenly;
  margin-top: 5%;
`;

const WateredButton = styled.button`
  background-color: steelblue;
  color: white;
  margin-bottom: 10%;
  border-radius: 5px;
  font-weight: bold;
`;

const EditButton = styled.button`
  background-color: #235b2d;
  color: white;
  border-radius: 5px;
  font-weight: bold;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border-radius: 5px;
  font-weight: bold;
`;

const Plant = props => {
    const deletePlant = plant => {
        console.log("ID", props.plant);
        axios
          .delete(
            `https://vdtyson-watermyplants.herokuapp.com/plants/${props.plant.id}`,props.plant.id
          )
          .then(response => {
            console.log("DELETE SUCCESS",response);
            props.setPlants(props.plantList.filter(plant => plant.id !== props.plant.id))
          })
          .catch(error => console.log("DELETE", error));
      };
    
  return (
    <div>
      <PlantListDiv>
        <WateredButton>Mark as Watered</WateredButton>
        <h4>{props.name}</h4>
        <h4>{props.species}</h4>

        <ButtonContain>
          <EditButton>Edit</EditButton>
          <DeleteButton onClick={e => {e.preventDefault(); deletePlant(props.plant.id)}} >Delete</DeleteButton>
        </ButtonContain>
      </PlantListDiv>
    </div>
  );
};

export default Plant;
