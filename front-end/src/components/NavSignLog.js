import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { FaUserCircle,FaSeedling } from "react-icons/fa";

const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  background-color: #235b2d;
`;
const H1Style = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 10px;
  color: white;
`;

const NavSignLog = () => {
    return (
      <NavStyle>
        <H1Style>Plant Parenthood</H1Style>
      </NavStyle>
    )
}

export default NavSignLog;