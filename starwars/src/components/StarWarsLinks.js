import React, {useState, useEffect} from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

export default function StartWarsLinks(){
    const [people, setPeople] = useState([]);

    useEffect(() =>{
        axios.get(`https://swapi.co/api/people/`)
        .then(response => {
            console.log(response.data);
            setPeople(response.data);
        })
        .catch(err =>{
            console.log('The data was not returned', err);
        })
    }, []);

    return (
        <div>
            {<StarWarsCard
            name={people.name}
            year={people.year}
            eye={people.eye_color}
            gender={people.gender}
            hair={people.hair_color}
            height={people.height}
            mass={people.mass}
            skin={people.skin_color}
            homeworld={people.homeworld}
            films={people.films}
            species={people.species}
            starships={people.starships}
            vehicles={people.vehicles}
            url={people.url} />}
        </div>
    )
}