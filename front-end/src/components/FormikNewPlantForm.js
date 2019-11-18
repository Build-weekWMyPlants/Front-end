import React from "react";
import styled from "styled-components";
import {withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../src/App.css"

const NavStyle = styled.nav`
    display: flex;
    align-items: center;
    background-color: #235B2D;
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

const LogInDivStyled = styled.div `
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 500px;
    align-items: center;
`;

const MainContain = styled.div `
    height: 86vh;
`;

const NewPlant = ({values, errors, touched}) => {
    return (
        <div>
        <NavStyle>
            <H1Style>Plant Parenthood</H1Style>
            <H4Style>Icon</H4Style>
        </NavStyle>
        <h1>Create A New Plant Profile!</h1>
        <MainContain>
        <LogInDivStyled>
        <Form>
        <Field
        className = "name-field"
        type="text"
        name="name"
        placeholder="Plant Nickname"
        />
        {touched.name && errors.name && (
            <p>{errors.name}</p>
        )}
        <Field className = "select-field" as="select" name="maintenance" placeholder="Maintenance Level">
            <option>Please Choose an Option</option>
            <option value="low">Low</option>
            <option value="mid">Mid</option>
            <option value="high">High</option>
        </Field>
        <Field
        className = "location-field"
        type="text"
        name="location"
        placeholder="Location"
        />
        {touched.location && errors.location && (
            <p>{errors.location}</p>
        )}
        </Form>
        </LogInDivStyled>
        </MainContain>
        </div>
    );
}

const FormikNewPlantForm = withFormik({
    mapPropsToValues({name, maintenance, location }) {
        return {
            name: name || "",
            maintenance: maintenance || "",
            location: location || ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please provide your plant with a nickname!"),
        maintenance: Yup.string().required(),
        location: Yup.string().required("Please specify where your plant is located!")
    }),
    


})(NewPlant)

export default FormikNewPlantForm;
