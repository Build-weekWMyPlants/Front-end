import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { FaUserCircle,FaSeedling } from "react-icons/fa";

const NavStyle = styled.nav`
    display: flex;
    align-items: center;
    background-color: #235B2D;
    height: 7vh;
`;

const H1Style = styled.h1`
    width: 95%;
    display: flex;
    padding-left: 10px;
    color: white;

`;

const Nav = () => {
    return (
        <NavStyle>
                <H1Style>Plant Parenthood</H1Style>
                <Link className="plant-icon" to="/plantpractice">
                <FaSeedling />
                </Link>
                <Link className="icon-style" to="plantpractice/userprofile">
                    <FaUserCircle />
                </Link>
            </NavStyle>
    )
}

export default Nav;