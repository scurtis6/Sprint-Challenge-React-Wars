import React, {useState, useEffect} from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

export default function StartWarsLinks(){
    const [character, setCharacter] = useState([]);

    useEffect(() =>{
        axios.get(`https://swapi.co/api/people/`)
        .then(response => {
            console.log(response.data.results);
            setCharacter(response.data.results);
        })
        .catch(err =>{
            console.log('The data was not returned', err);
        });
    }, []);

    return (
        <div>
            {character.map(characters => {
                return (<StarWarsCard 
                    name={characters.name}
                    year={characters.birth_year}
                    height={characters.height}
                    mass={characters.mass}
                    eye={characters.eye_color} 
                    gender={characters.gender}
                    hair={characters.hair_color}
                    skin={characters.skin_color} />);
            })}
        </div>
        );
}
//             *more attributes below*
//             homeworld={peoples.homeworld}
//             films={peoples.films}
//             species={peoples.species}
//             starships={peoples.starships}
//             vehicles={peoples.vehicles}
//             url={peoples.url} 