import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from "styled-components";
import './SignUpForm.css';
import { Link } from 'react-router-dom';

const MainCont = styled.div`
    width: 50%;
    margin: 0 auto;
`;
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
    border: 1px solid #235B2D;
    color: white;
    width: 40%;
    margin: 30 0;
    border-radius: 5px;
`;

const NewUser = ({ values, errors, touched, status }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        if (status) {
            setUser([...user, status])
        }
    }, [status]);

    return (
        <MainCont>
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
                        <StyledEntry>Enter Username<Field className='input-box' type='text' name='name' placeholder='username' />
                            {touched.name && errors.name && (<p className='error'>{errors.name}</p>)}
                        </StyledEntry>

                    </div>
                    <div>
                        <StyledEntry>Enter Number<Field className='input-box' type='number' name='number' placeholder='(xxx)-xxx-xxxx' />
                            {touched.number && errors.number && (<p className='error'>{errors.number}</p>)}
                        </StyledEntry>
                    </div>
                    <div>
                        <StyledEntry>Enter Password<Field className='input-box' type='password' name='password' placeholder='●●●●●●●●' />
                            {touched.password && errors.password && (<p className='error'>{errors.password}</p>)}
                        </StyledEntry>

                    </div>
                    <StyledButton>Next</StyledButton>
                    <Link>Already Have An Account?</Link>
                </StyledForm>
            </Form>
        </MainCont>
    )
}

const FormikNewUser = withFormik({
    mapPropsToValues({ name, number, password }) {
        return {
            name: name || '',
            number: number || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Name must have more than 3 characters.').required('Required field.'),
        number: Yup.string().min(10, 'Number must be 10 characters.').required('Required field.'),
        password: Yup.string().min(6, 'Password must have at least 6 characters.').required('Required field.')
    }),
})(NewUser);

export default FormikNewUser;


