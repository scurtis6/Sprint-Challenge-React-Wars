import React from "react";

const StarWarsCard = props => {
    return(
        <div>
            <h1>Star Wars Character: {props.name}</h1>
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