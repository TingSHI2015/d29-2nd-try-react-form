import {useParams} from "react-router-dom";
import CharacterCard from "../components/CharacterCard.tsx";
import {useState} from "react";
import {Character} from "../types/RickAndMortyCharacter.ts";
//import {characters} from "../Characters.ts";

type CharacterDetailsPageProps = {
    characters: Character[]
}

export default function CharacterDetailsPage(props: CharacterDetailsPageProps){

    const params = useParams();
    const id = params.id;


    const character = props.characters.find((character) => character.id ===Number(id));
    console.log(id);
    console.log(Number(id));

    if (character === undefined){
        return <p>Character not found</p>
    }

    return(
        <div>
{/*            <h2>{character.name}</h2>
            <img src={character.image}/>
            <p>{character.status}</p>
            <p>{character.origin.name}</p>
            <p>{character.gender}</p>
            <p>{character.type}</p>*/}

            <CharacterCard character={character}/>

        </div>
    )
}