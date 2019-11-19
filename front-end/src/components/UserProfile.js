import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';
import plant from '../images/placeholder-plant.jpg';

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

const MainContain = styled.div`
    height: 93vh;
    width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid red;
`;
const ImgPlaceholder = styled.img`
    width: 30%;
    display: flex;
    margin: 0 auto;
`;

const UserProfile = () => {

    const [userPhoto, setUserPhoto] = useState([]);

    useEffect(() => {
        axios.get(``)
            .then(response => {
                console.log(response);
                setUserPhoto(response.data);
            })
            .catch(err => {
                console.log('Identity theft is not a joke! Now we gotta fix it.');
            });
    }, [])

    return (
        <div>
            <NavStyle>
                <H1Style>Plant Parenthood</H1Style>
                <H4Style><FaUserCircle /></H4Style>
            </NavStyle>
            <MainContain>
                <ImgPlaceholder src={plant} />
                <button>Update Photo</button>
                <div>
                    <h4>Username</h4>
                    <p>This is the Username placeholder</p>
                </div>
                <div>
                    <h4>Password</h4>
                    <p>This is the Password placeholder</p>
                </div>
                <div>
                    <button>Save Changes</button>
                    <button>Log out</button>
                </div>
            </MainContain>
        </div>
    );
}

export default UserProfile;