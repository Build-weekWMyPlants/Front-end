import React, { useState } from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Nav from "./Nav";
import Placeholder from "../images/plant.png";
import { postPlant } from "../actions/postPlantActions";
import { Link } from "react-router-dom";
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

const NewPlant = ({ postPlant, values, errors, touched }) => {
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
      <h1>Hello</h1>
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

      <button  type="submit" >Add Plant</button>
    </form>
    </div>
  );
};

// const formikNewPlant = withFormik({
//   mapPropsToValues({ nickname, photo, plantType }) {
//     return {
//       nickname: nickname || "",
//       photo: photo || "",
//       plantType: plantType || ""
//     };
//   },
//   handleSubmit(values, formikBag) {
//     console.log(values);
//     formikBag.props.postPlant(values);
//   },
//   validationSchema: Yup.object().shape({
//     nickname: Yup.string().required("Please provide a nickname for your plant"),
//     photo: Yup.string().required("Please provide a photo for your plant"),
//     plantType: Yup.string().required("please include a plant type")
//   })
// })(NewPlant);
const mapDispatchToProps = {
  postPlant
};
export default connect(state => state, mapDispatchToProps)(NewPlant);
// export default formikNewPlant;
