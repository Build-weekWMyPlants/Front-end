import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { postPlant } from "../actions/postPlantActions";
import "../../src/App.css";
import { connect } from "react-redux";

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
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageDiv = styled.div`
  width: 80%;
  padding-bottom: 10px;
`;

const NewPlant = ({ postPlant }) => {
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
    postPlant(plant);
    console.log(plant);
  };

  return (
    <div>
      <Nav />
      <h1>Add A Plant</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="nickname"
          id="nickname"
          value={plant.nickname}
          onChange={handleChange}
          placeholder="Plant Nickname"
        />

        <label htmlFor="age"></label>
        <input
          type="text"
          name="photo"
          id="photo"
          value={plant.photo}
          onChange={handleChange}
          placeholder="Photo URL"
        />

        <label htmlFor="height"></label>
        <input
          type="text"
          name="plantType"
          id="plantType"
          value={plant.plantType}
          onChange={handleChange}
          placeholder="Plant Type"
        />

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  postPlant
};
export default connect(state => state, mapDispatchToProps)(NewPlant);
