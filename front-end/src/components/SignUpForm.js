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
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
`;
const StyledEntry = styled.label`
  color: black;
  font-weight: bold;
  width: 80%;
  margin: 0 auto;
`;

const FormDiv = styled.div`
  margin: 10px 0;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  margin-bottom: 20px;
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
  });
  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    signUp(userInfo);
    history.push("/login");
  };
  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <div>
      <NavSignLog />
    <MainCont>
      <div>
        <H2Styled>Let's get started!</H2Styled>
        <H3Styled>Create your account</H3Styled>
      </div>
      <Form onSubmit={handleSubmit} >
        <StyledForm>
          <StyledDiv>
            <FormDiv>
              <StyledEntry>Username</StyledEntry>
              <Field
                className="input-box"
                type="text"
                name="username"
                placeholder="username"
                onChange={handleChange}
                value={userInfo.username}
              />
              {touched.username && errors.username && (
                <p className="error">{errors.username}</p>
              )}
            </FormDiv>
            <FormDiv>
              <StyledEntry>Email</StyledEntry>
              <Field
                className="input-box"
                type="primaryemail"
                name="primaryemail"
                placeholder="Example@gmail.com"
               onChange={handleChange}
                value={userInfo.primaryemail}
              />
              {touched.primaryemail && errors.primaryemail && (
                <p className="error">{errors.primaryemail}</p>
              )}
            </FormDiv>
            <StyledEntry>Password</StyledEntry>
            <Field
              className="input-box"
              type="password"
              name="password"
              placeholder="●●●●●●●●"
              onChange={handleChange}
              value={userInfo.password}
            />
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}
          </StyledDiv>
          <StyledButton type="submit" >Next</StyledButton>
          <Link to="/login" className="accountLink">
            Already Have An Account?
          </Link>
        </StyledForm>
      </Form>
    </MainCont>
    </div>
  );
};

const FormikNewUser = withFormik({
  mapPropsToValues({ username, primaryemail, password  }) {
    return {
      username: username || "",
      primaryemail: primaryemail || "",
      password: password || ""
      
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(3, "Name must have more than 3 characters.")
      .required("Required field."),
    primaryemail: Yup.string()
      .email("Email not valid.")
      .required("Required field."),
    password: Yup.string()
      .min(6, "Password must have at least 6 characters.")
      .required("Required field.")
   
  })
})(NewUser);

const mapDispatchToProps = {
  signUp
};

export default connect(state => state, mapDispatchToProps)(FormikNewUser);
