import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import "./SignUpForm.css";
import NavSignLog from "./NavSignLog";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../actions/createUserActions";

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
  font-weight: bold;
`;
const StyledResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormDiv = styled.div`
    margin: 10px 0;
`;
const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  background-color: #235b2d;
`;
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0 auto;
    margin-bottom: 20px;
`;
const H1Style = styled.h1`
  width: 50%;
  display: flex;
  padding-left: 10px;
  color: white;
`;
const H2Styled = styled.h2`
    margin-top: 20px;
`;
const H3Styled = styled.h3`
    font-size: 25px;
    margin-top: 20px;
`;
const StyledButton = styled.button`
  background-color: #235b2d;
  border: 1px solid #235b2d;
  color: white;
  width: 30%;
  margin: 30 0;
  border-radius: 20px;
`;

const NewUser = ({ history, signUp, values, errors, touched, status }) => {
    const [user, setUser] = useState([]);
    const [userInfo, setUserInfo] = useState({
        username: "",
        primaryemail: "",
        password: ""
    })
    const handleChange = e => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        signUp(userInfo);
        history.push('/login')

    }
    useEffect(() => {
        if (status) {
            setUser([...user, status]);
        }
    }, [status]);

    return (
        <MainCont>
            <NavStyle>
                <H1Style>Plant Parenthood</H1Style>
            </NavStyle>
            <div>
                <H2Styled>Let's get started!</H2Styled>
                <H3Styled>Create your account</H3Styled>
            </div>
            <Form>
                <StyledForm>
                    <StyledDiv>
                        <FormDiv>
                            <StyledEntry>Username</StyledEntry>
                            <Field className='input-box' type='text' name='name' placeholder='username' />
                            {touched.name && errors.name && (<p className='error'>{errors.name}</p>)}
                        </FormDiv>
                        <FormDiv>
                            <StyledEntry>Email</StyledEntry>
                            <Field className='input-box' type='email' name='email' placeholder='Example@gmail.com' />
                            {touched.email && errors.email && (<p className='error'>{errors.email}</p>)}
                        </FormDiv>
                            <StyledEntry>Password</StyledEntry>
                            <Field className='input-box' type='password' name='password' placeholder='●●●●●●●●' />
                            {touched.password && errors.password && (<p className='error'>{errors.password}</p>)}
                        <FormDiv>    
                            <StyledEntry>Confirm Password</StyledEntry>
                            <Field className='input-box' type='password' name='password' placeholder='●●●●●●●●' />
                            {/* {touched.confirm && errors.confirm && (<p className='error'>{errors.confirm}</p>)} */}
                        </FormDiv>    
                    </StyledDiv>
                    <StyledButton>Next</StyledButton>
                    <Link to='/login' className='accountLink'>Already Have An Account?</Link>
                </StyledForm>
            </Form>
        </MainCont>
    )
}

const FormikNewUser = withFormik({
    mapPropsToValues({ name, email, password, /*confirm*/ }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            // confirm: confirm || ''
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Name must have more than 3 characters.').required('Required field.'),
        email: Yup.string().email("Email not valid.").required("Required field."),
        password: Yup.string().min(6, 'Password must have at least 6 characters.').required('Required field.'),
        // confirm: Yup.string()
    }),
})(NewUser);

const mapDispatchToProps = {
    signUp
};

export default connect(state => state, mapDispatchToProps)(FormikNewUser);
