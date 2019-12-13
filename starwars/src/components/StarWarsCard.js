import React from "react";
import {Name, Info, InfoP, Appearance, AppearanceP} from "./StarWarsStyles";

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
                <Appearance>Character Appearance</Appearance>
                <AppearanceP>Gender: {props.gender}</AppearanceP>
                <AppearanceP>Eye Color: {props.eye}</AppearanceP>
                <AppearanceP>Hair color: {props.hair}</AppearanceP>
                <AppearanceP>Skin color: {props.skin}</AppearanceP>
            </div>
        </div>
    )
}

export default StarWarsCard;