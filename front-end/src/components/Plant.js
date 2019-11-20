import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";

const MainContain = styled.div`
    height: 93vh;
    width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid red;
`;

const ImageDiv = styled.div`
    width: 80%;
    padding-bottom: 20px;
    margin: 0 auto;
`;
const Plant = () => {
    const [plant, setPlant] = useState()

    return (
        <div>
            <Nav />
            <MainContain>
                <h2>Nickname: Planty Planterson</h2>
                {/* <ImageDiv>
                    <img src="https://www.fillmurray.com/200/300" alt="placeholder murray" />
                </ImageDiv> */}
                <h3>Species: Succulent</h3>
                <h3>Location: Kitchen Window</h3>
                <h3>Last Time Watered: </h3>
                <div>
                    <button className="watered-button">Watered</button>
                    <button className="button-style-plant">Edit</button>
                    <button className="delete-button">Delete</button>
                </div>
            </MainContain>
        </div>
    );
}

export default Plant