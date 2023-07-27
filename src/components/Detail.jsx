import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = ({characters}) => {
    const { id } = useParams()
    console.log(id);
    const [character, setCharacter] = useState({})
    console.log(character, 'holi')
    console.log(characters)

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div>
            <h1> {character.name} </h1>
            <br></br>
            <h2>Status | {character.status}</h2>
            <h2>Specie | {character.species}</h2>
            <h2>Gender | {character.gender}</h2>
            <h2>Origin | {origin.name}</h2>
            <img src={character.image} alt={character.name}/>

            
        </div>
    )
}

export default Detail