import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { postPlant } from "../actions/postPlantActions";
import "../../src/App.css";
import { connect } from "react-redux";
import PlantPic from "../images/plant.png"

const LogInDivStyled = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  // flex-wrap: wrap;
  height: 750px;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
`;

const MainContain = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageDiv = styled.div`
  width: 80%;
  padding-bottom: 10px;
`;

const NewPlant = (props) => {
  const [plant, setPlant] = useState({
    nickname: "",
    photo: "",
    plantType: ""
  });

  const handleChange = e => {
    setPlant({
      ...plant,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.postPlant(plant);
    console.log(plant);
    props.history.push("/plantpractice")
  };

  return (
    <div>
      <Nav />
      <h1>Add A Plant</h1>
      <MainContain>
        <LogInDivStyled>
          <ImageDiv>
          <img className="new-plant-image"src={PlantPic} alt="hands holding plant"/>
          </ImageDiv>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="name">Plant Nickname: </label>
        <input
          type="text"
          name="nickname"
          id="nickname"
          required
          value={plant.nickname}
          onChange={handleChange}
          placeholder="Plant Nickname"
        />

        <label htmlFor="age">Plant Photo: </label>
        <input
          type="text"
          name="photo"
          id="photo"
          value={plant.photo}
          onChange={handleChange}
          placeholder="Photo URL"
        />

        <label htmlFor="height">Plant Species: </label>
        <input
          type="text"
          name="plantType"
          id="plantType"
          required
          value={plant.plantType}
          onChange={handleChange}
          placeholder="Plant Type"
        />

        <button className="add-plant-button" type="submit">Add Plant</button>
      </form>
      </LogInDivStyled>
      </MainContain>
    </div>
  );
};

const mapDispatchToProps = {
  postPlant
};
export default connect(state => state, mapDispatchToProps)(NewPlant);
