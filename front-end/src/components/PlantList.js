import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";
import axios from "axios";

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
    align-items: center;
    jusity-content: center;
    flex-direction: column;
    padding-left: 5px;
    align-items: center;
    margin-top: 35px;
`;

const TopDivStyle = styled.div`
    display: flex;
    height: 40px;
    width: 900px;
    margin: 0 auto;
    margin-top: 10px;
`;

const PlantList = props => {
    const [plantList, setPlantList] = useState([])

    useEffect(() => {
        axios.get('https://vdtyson-watermyplants.herokuapp.com/plants/user/7')
            .then(response => {
                console.log(response)
                setPlantList(response.data)
            })
            .catch(error => {
                console.log("Something went wrong!", error)
            })
    }, [])

    return (
        <div>
            <Nav />
            <TopDivStyle>
                <h3 className="plant-list">All Plants</h3>
                <Link className="add-plant-button" to="/add-plant">
                <div>Add Plant</div>
                </Link>
                </TopDivStyle>
            <MainContain>
                {plantList.map(plant => (
                    <PlantListDiv>
                        <h3>Nickname: {plant.nickname}</h3>
                        <h4>Plant Type: {plant.plantType}</h4>
                    </PlantListDiv>
                ))}
            </MainContain>
        </div>

    )

}

export default PlantList;