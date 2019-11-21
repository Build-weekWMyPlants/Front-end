import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';
import Nav from "./Nav";
import plant from '../images/placeholder-plant.jpg';
import './UserProfile.css';

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
const UpdateButton = styled.button`
    background-color: #2D6476;
    border: 1px solid #2D6476;
    color: white;
    width: 20%;
    margin: 20px auto;
    border-radius: 5px;
`;
const SaveButton = styled.button`
    background-color: #235b2d;
    border: 1px solid #235b2d;
    color: white;
    border-radius: 5px;
    width: 25%;
    margin: 5px auto;
`;
const LogOutButton = styled.button`
    background-color: white;
    border: 1px solid #235b2d;
    color: #235b2d;
    border-radius: 5px;
    width: 25%;
    margin: 5px auto;
`;
const MainContain = styled.div`
    height: 93vh;
    width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`;
const ImgPlaceholder = styled.img`
    width: 30%;
    display: flex;
    margin: 0 auto;
    border-radius: 150px;
`;

const UserProfile = () => {

    const [data, setData] = useState([]);
    const user = localStorage.getItem('username')
    useEffect(() => {
        axios.get(`https://vdtyson-watermyplants.herokuapp.com/username/cinnamon`)
            .then(response => {
                console.log(response);
                setData(response.data);
            })
            .catch(err => {
                console.log(err, 'Identity theft is not a joke! Now we gotta fix it.');
            });
    }, [])

    return (
        <div>
            <Nav />
            <MainContain>
                {/* <StyledDiv>
                    <ImgPlaceholder className='plantImage' src={plant} />
                    <UpdateButton>Update Photo</UpdateButton>
                </StyledDiv> */}
                <StyledDiv>
                    <h4>Username</h4>
                    <p>Hi, {user}!</p>
                </StyledDiv>
                <StyledDiv>
                    <h4>Password</h4>
                    <p>This is the Password placeholder</p>
                </StyledDiv>
                <StyledDiv>
                    <SaveButton>Save Changes</SaveButton>
                    <LogOutButton>Log out</LogOutButton>
                </StyledDiv>
            </MainContain>
        </div>
    );
}

export default UserProfile;