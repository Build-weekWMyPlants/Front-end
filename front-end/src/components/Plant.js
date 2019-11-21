import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";
import axios from "axios"

const PlantListDiv = styled.div`
    border: 1px solid black;
    height: 400px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    // padding-left: 5px;
    align-content: center;
    margin-top: 35px;
`;

const ButtonContain = styled.div`
    display: flex;
    width: 40%;
    justify-content: space-evenly;
    // margin-top: 5%;
`;

const WateredButton = styled.button`
    background-color: steelblue;
    color: white;
    margin-bottom: 5%;
    border-radius: 5px;
    font-weight: bold;
`;

const EditButton = styled.button`
    background-color: #235B2D;
    color: white;
    border-radius: 5px;
    font-weight: bold;

`;

const DeleteButton = styled.button`
    background-color: red;
    color: white;
    border-radius: 5px;
    font-weight: bold;

`;

const ImageStyle = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 5px;
`;

const H4Style = styled.h4`
    font-size: 16px;
`;

const Plant = props => {
 
    return (
        <div>
                <PlantListDiv>
                
                    <ImageStyle src={props.image}/>
                    <H4Style>{props.name}</H4Style>
                    <H4Style>{props.species}</H4Style>
                    <WateredButton>Mark as Watered</WateredButton>
                    <ButtonContain>
                    <EditButton>Edit</EditButton>
                    <DeleteButton>Delete</DeleteButton>
                    </ButtonContain>
                </PlantListDiv> 
                </div>          
    );
}

export default Plant