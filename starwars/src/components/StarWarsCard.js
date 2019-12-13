import React from "react";
import {Name} from "./StarWarsStyles";

const StarWarsCard = props => {
    return(
        <div>
            <Name>Star Wars Character: {props.name}</Name>
            <div className="character_info">
                <h3>Character Information</h3>
                <p>Birth of year: {props.year}</p>
                <p>Height: {props.height} cm</p>
                <p>Mass: {props.mass}</p>
    
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