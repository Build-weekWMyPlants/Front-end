import React, { useState, useEffect } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { login } from "../actions/LoginActions";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
const NewUser = ({ values, errors, touched, status, login}) => {
  const [user, setUser] = useState([]);
  const [data, setData] = useState({
    username: "",
    password: ""
  });
  const [loggedIn, setLoggedIn] = useState(false)

  // const handleChange = e => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value
      
  //   });
    
  // };
const logOut = e => {
  e.preventDefault();
  localStorage.clear("token");
  setLoggedIn(false);
}
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   login(data);
  //   console.log(data)
  //   // setLoggedIn(true);
  //   // history.push("/plantpractice")
  // };

  
  // const axiosLogin = () => {

  //     axios
  //     .post("https://vdtyson-watermyplants.herokuapp.com/login", data)
  //     .then(response => {
  //         console.log(data);
  //         const { data } = response;
  //         localStorage.setItem("token", data.payload)
  //     })
  //     .catch(error=> {
  //         console.log("LOGIN ERROR", error, data)
  //     })
  // }
  

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
        <h2>{loggedIn ? "Logged in" : "Please login"}</h2>
      </div>
      <Form >
        <StyledForm>
          <div>
            <StyledEntry>
              Enter Username
              <Field
                className="input-box"
                type="text"
                name="username"
                value={values.username}
                placeholder="username"
                
              />
              {touched.username && errors.username && (
                <p className="error">{errors.username}</p>
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
                value={values.password}
              />
              {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
              )}
            </StyledEntry>
          </div>
          <StyledButton type="submit">Log in</StyledButton>
          <StyledButton onClick={logOut}>Log out</StyledButton>
          <Link to="/sign-up">Don't Have An Account?</Link>
        </StyledForm>
      </Form>
    </MainCont>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password}) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  handleSubmit(values, formikBag){formikBag.props.login(values)},
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Required field."),
    password: Yup.string().required("Required field.")
  })
})(NewUser);

// export default (FormikLogin)

const mapDispatchToProps = {
  login
};
export default connect(state => state, mapDispatchToProps)(FormikLogin);
