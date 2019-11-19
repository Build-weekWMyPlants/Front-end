import React from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import "../../src/App.css"

const NavStyle = styled.nav`
    display: flex;
    align-items: center;
    background-color: #235B2D;
    height: 7vh;
`;

const H1Style = styled.h1`
    width: 50%;
    display: flex;
    padding-left: 10px;
    color: white;

`;

const H4Style = styled.h4`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    color: white;
`;

const LogInDivStyled = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    // flex-wrap: wrap;
    height: 650px;
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
    padding-bottom: 20px;
`;

const NewPlant = ({ values, errors, touched }) => {
    return (
        <div>
            <NavStyle>
                <H1Style>Plant Parenthood</H1Style>
                <H4Style>Icon</H4Style>
            </NavStyle>
            
            <MainContain>
            <h1>Add a New Plant!</h1>
                <LogInDivStyled>
                    {/* <ImageDiv>
                        <img src="/" alt="murray placeholder" />
                    </ImageDiv> */}
                    <Form className = "form-container">
                        <label>Nickname: </label>
                        <Field
                            className="input-field"
                            type="text"
                            name="name"
                            placeholder="Plant Nickname"
                        />
                        {touched.name && errors.name && (
                            <p>{errors.name}</p>
                        )}
                        <label>Species: </label>
                        <Field
                            className="input-field"
                            type="text"
                            name="species"
                            placeholder="Species"
                        />
                        {touched.species && errors.species && (
                            <p>{errors.species}</p>
                        )}
                        <label>Location: </label>
                        <Field
                            className="input-field"
                            type="text"
                            name="location"
                            placeholder="Location"
                        />
                        {touched.location && errors.location && (
                            <p>{errors.location}</p>
                        )}
                    </Form>
                    <button className = "button-style">Add Plant!</button>
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
