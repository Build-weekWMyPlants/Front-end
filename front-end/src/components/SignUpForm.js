import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from "styled-components";
import './SignUpForm.css';

const StyledForm = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 margin: 100px auto;
`;
const StyledEntry = styled.label`
    color: black;
`;
const StyledResults = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

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
const StyledButton = styled.button`
    background-color: #235B2D;
`;

const NewUser = ({ values, errors, touched, status }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        if (status) {
            setUser([...user, status])
        }
    }, [status]);

    return (
        <div>
            <NavStyle>
                <H1Style>Plant Parenthood</H1Style>
                <H4Style>Icon</H4Style>
            </NavStyle>
            <div>
                <h2>Let's get started</h2>
                <h3>Create your account</h3>
            </div>
            <Form>
                <StyledForm>
                    <div>
                        <StyledEntry>Enter UserName<Field className='input-box' type='text' name='username' placeholder='username'/></StyledEntry>
                        {touched.name && errors.name && (<p className='error'>{errors.name}</p>)}
                    </div>
                    <div>
                        <StyledEntry>Enter Number<Field className='input-box' type='number' name='number' placeholder='(xxx)-xxx-xxxx'/></StyledEntry>
                        {touched.number && errors.number && (<p className='error'>{errors.numbers}</p>)}
                    </div>
                    <div>
                        <StyledEntry>Enter Password<Field className='input-box' type='password' name='password' placeholder='●●●●●●●●' /></StyledEntry>
                        {touched.password && errors.password && (<p className='error'>{errors.password}</p>)}
                    </div>
                    <StyledButton>Next</StyledButton>
                </StyledForm>
            </Form>
        </div>
    )
}
const FormikNewUser = withFormik({
    mapPropsToValues({ name, number, password, terms }) {
        return {
            name: name || '',
            number: number || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Name must have more than one character.').required('Required field.'),
        number: Yup.string().min(10, 'Number must have at least 10 numbers.').required('Required field.'),
        password: Yup.string().min(6, 'Password must have at least 6 characters.').required('Required field.')
    }),
})(NewUser);

export default FormikNewUser;