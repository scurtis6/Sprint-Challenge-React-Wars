import React from "react";
import {Name, Info,InfoP} from "./StarWarsStyles";

const StarWarsCard = props => {
    return(
        <div>
            <Name>Star Wars Character: {props.name}</Name>
            <div className="character_info">
                <Info>Character Information</Info>
                <InfoP>Birth of year: {props.year}</InfoP>
                <InfoP>Height: {props.height} cm</InfoP>
                <InfoP>Mass: {props.mass}</InfoP>
    
            </div>
            <div>
                <h3>Appearance</h3>
                <p>Gender: {props.gender}</p>
                <p>Eye Color: {props.eye}</p>
                <p>Hair color: {props.hair}</p>
                <p>Skin color: {props.skin}</p>
            </div>
        </div>
    )
}

export default StarWarsCard;