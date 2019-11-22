import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";
import axios from "axios";
import DefaultPic from "../images/default.jpg"
import Default from "../images/DefaultPlant.jpg"
import './Plant.css';
import dateFormat from "dateformat"

const PlantListDiv = styled.div`
  border: 1px solid black;
  height: 420px;
  width: 420px;
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
  // margin-top: 5%;
`;

const WateredButton = styled.button`
    background-color: #2D6476;
    border: 1px solid #2D6476;
    color: white;
    margin-bottom: 5%;
    border-radius: 5px;
    font-weight: bold;
`;

const StyledPara = styled.p`
  font-size: 14px;
`;
const EditButton = styled.button`
  background-color: #235b2d;
  border: 1px solid #235b2d;
  color: white;
  border-radius: 5px;
  font-weight: bold;
`;

const DeleteButton = styled.button`
  background-color: red;
  border: 1px solid red;
  color: white;
  border-radius: 5px;
  font-weight: bold;
`;

const ImageStyle = styled.img`
  width: 370px;
  height: 200px;
  border-radius: 5px;
`;

const H4Style = styled.h4`
  font-size: 16px;
`;

const StyledWatered = styled.button`
  width: 85px;
  height: 50px;
  border-radius: 25px;
`;


// const initialPhoto = {
//   photo: ""
// };
const initialNickname = {
  nickname: ""
};


const Plant = props => {
  // const [photoEditing, setPhotoEditting] = useState(false);
  // const [photoToEdit, setPhotoToEdit] = useState(initialPhoto);
  const [timeStamp, setTimeStamp] = useState("")

    const waterTimeStamp = () => {
        setTimeStamp(dateFormat("dddd, mmmm dS, yyyy, h:MM:ss TT"))
        // dateFormat(timeStamp, "dddd, mmmm ds, yyyy, h:MM:ss TT")
        console.log(timeStamp)
    }
  const deletePlant = plant => {
    console.log("ID", props.plant);
    axios
      .delete(
        `https://vdtyson-watermyplants.herokuapp.com/plants/${props.plant.id}`,
        props.plant.id
      )
      .then(response => {
        console.log("DELETE SUCCESS", response);
        props.setPlants(
          props.plantList.filter(plant => plant.id !== props.plant.id)
        );
      })
      .catch(error => console.log("DELETE", error));
  };
  const [nameEditting, setNameEditting] = useState(false);
  const [nameToEdit, setNameToEdit] = useState(initialNickname);

  const editName = plant => {
    setNameEditting(true);
    setNameToEdit(plant);
  };

  const saveName = () => {
    console.log("NAME", nameToEdit);
    axios
      .put(
        `https://vdtyson-watermyplants.herokuapp.com/plants/${props.plant.id}/nickname`,
        nameToEdit
      )
      .then(response => {
        console.log("Name Edit Success", response);
      })
      .catch(error => {
        console.log("NAME EDIT ERROR", error);
      });
  };
  return (
    <div>
      <PlantListDiv>
        <ImageStyle
          src={
            props.image === " " || props.image === "" ? Default : props.image
          }
        />
        <H4Style>{props.name}</H4Style>
        <H4Style>{props.species}</H4Style>
        <WateredButton onClick={waterTimeStamp}>Mark as Watered</WateredButton>
                    <p>Last Watered: {timeStamp}</p>
        <ButtonContain>
          <EditButton onClick={e => {editName(nameToEdit)}}>Edit Name</EditButton>
          <DeleteButton
            onClick={e => {
              e.preventDefault();
              deletePlant(props.plant.id);
            }}>
            Delete
          </DeleteButton>
          {nameEditting && (
            <form
              onSubmit={e => {
                e.preventDefault();
                saveName();
              }}
            >
              <legend>edit name</legend>
              <input
                onChange={e =>
                  setNameToEdit({ ...nameToEdit, nickname: e.target.value })
                }
                value={nameToEdit.nickname}
              />
              <div className="button-row">
                <button type="submit">save</button>
                <button onClick={() => setNameEditting(false)}>cancel</button>
              </div>
            </form>
          )}
        </ButtonContain>
      </PlantListDiv>
    </div>
  );
};

export default Plant;

// function Toggle(props) {
//   const [toggleState, setToggleState] = useState("off");

//   function toggle() {
//     setToggleState(toggleState === "off" ? "on" : "off");
//   }


//   return <div className={`switch ${toggleState}`} onClick={toggle} />;
