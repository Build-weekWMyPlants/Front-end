import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import "./SignUpForm.css";
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
`;
const StyledResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  background-color: #235b2d;
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
  background-color: #235b2d;
  border: 1px solid #235b2d;
  color: white;
  width: 80%;
  margin: 30 0;
  border-radius: 20px;
`;

const NewUser = ({ history,signUp, values, errors, touched, status }) => {
  const [user, setUser] = useState([]);
 const [userInfo, setUserInfo] = useState({
     username: "",
     primaryemail: "",
     password: ""
 })
 const handleChange = e => {
     setUserInfo({
         ...userInfo,
         [e.target.name]:e.target.value
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
        <H4Style>Icon</H4Style>
      </NavStyle>
      <div>
        <h2>Let's get started</h2>
        <h3>Create your account</h3>
      </div>
      <Form onSubmit={handleSubmit}>
        <StyledForm>
          <div>
            <StyledEntry>
              Enter Username
              <Field
                className="input-box"
                type="text"
                name="username"
                placeholder="username"
                value={userInfo.username}
                onChange={handleChange}
              />
              {touched.name && errors.name && (
                <p className="error">{errors.name}</p>
              )}
            </StyledEntry>
          </div>
          <div>
            <StyledEntry>
              Enter Email
              <Field
                className="input-box"
                type="email"
                name="primaryemail"
                placeholder="john@doe.com"
                value={userInfo.primaryemail}
                onChange={handleChange}
              />
              {touched.number && errors.number && (
                <p className="error">{errors.number}</p>
              )}
            </StyledEntry>
          </div>
          <div>
            <StyledEntry>
              Enter Password
              <Field
                className="input-box"
                type="password"
                name="password"
                placeholder="●●●●●●●●"
                value={userInfo.password}
                onChange={handleChange}
              />
              {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
              )}
            </StyledEntry>
          </div>
          <StyledButton type="submit">Next</StyledButton>
          <Link to="/login">Already Have An Account?</Link>
        </StyledForm>
      </Form>
    </MainCont>
  );
};

const FormikNewUser = withFormik({
  mapPropsToValues({ username, primaryemail, password, terms }) {
    return {
      username: username || "",
      primaryemail: primaryemail || "",
      password: password || ""
    };
  },
  // handleSubmit(values, formikBag){formikBag.props.signUp(values)},

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(3, "Name must have more than three character.")
      .required("Required field."),
    primaryemail: Yup.string()
      .required("Required field."),
    primarypassword: Yup.string()
      .min(6, "Password must have at least 6 characters.")
      .required("Required field.")
  })
  
})(NewUser);

const mapDispatchToProps = {
  signUp
};

export default connect(state => state, mapDispatchToProps)(FormikNewUser);
