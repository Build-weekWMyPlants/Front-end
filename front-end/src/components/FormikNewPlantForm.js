import React from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Nav from "./Nav";
import Placeholder from "../images/plant.png"
import { Link } from "react-router-dom";
import "../../src/App.css"

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

const NewPlant = ({ values, errors, touched }) => {
    return (
        <div>
            <Nav />
            <MainContain>
                <h1>Add a New Plant!</h1>
                <LogInDivStyled>
                    <ImageDiv>
                        <img className = "new-plant-image"src={Placeholder} alt="placeholder image of flowers" />
                    </ImageDiv>
                    <Form className="form-container">
                        <label>Nickname: </label>
                        <Field
                            className="input-field"
                            type="text"
                            name="name"
                            placeholder="Plant Nickname"
                        />
                        {touched.name && errors.name && (
                            <p className="error-message">{errors.name}</p>
                        )}
                        <label>Species: </label>
                        <Field
                            className="input-field"
                            type="text"
                            name="species"
                            placeholder="Species"
                        />
                        {touched.species && errors.species && (
                            <p className="error-message">{errors.species}</p>
                        )}
                        <label>Location: </label>
                        <Field
                            className="input-field"
                            type="text"
                            name="location"
                            placeholder="Location"
                        />
                        {touched.location && errors.location && (
                            <p className="error-message">{errors.location}</p>
                        )}
                    </Form>
                    <button className="button-style">Add Plant!</button>
                </LogInDivStyled>
            </MainContain>
        </div>
    );
}

const FormikNewPlantForm = withFormik({
    mapPropsToValues({ name, species, location }) {
        return {
            name: name || "",
            species: species || "",
            location: location || ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please provide your plant with a nickname!"),
        species: Yup.string().required("Type of Plant is required!"),
        location: Yup.string().required("Please specify where your plant is located!")
    }),



})(NewPlant)

export default FormikNewPlantForm;
