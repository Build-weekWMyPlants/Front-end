import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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
    // flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const PlantListDiv = styled.div`
    border: 1px solid black;
    height: 250px;
    width: 250px;
    display: flex;
    padding-left: 5px;
    align-items: center;
    margin-top: 35px;
`;

const PlantList = props => {
    const [plantList, setPlantList] = useState([])

    useEffect(() => {
        axios.get('')
            .then(response => {
                setPlantList()
            })
            .catch(error => {
                console.log("Something went wrong!", error)
            })
    }, [])

    return (
        <div>
            <NavStyle>
                <H1Style>Plant Parenthood</H1Style>
                <H4Style>Icon</H4Style>
            </NavStyle>
            <MainContain>
                <PlantListDiv>
                    <h3>Nickname: </h3>
                </PlantListDiv>
            </MainContain>
        </div>

    )

}

export default PlantList;