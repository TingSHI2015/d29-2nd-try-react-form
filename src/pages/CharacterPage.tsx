import CharacterGallery from "../components/CharacterGallery.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
//import {characters} from "../Characters.ts";
import {Character} from "../types/RickAndMortyCharacter.ts";

type CharacterPageProps = {
    characters:Character[]
    saveCharacter: (newCharacter: Character) => void
}

export default function CharacterPage(props: CharacterPageProps){

    const [searchText, setSearchText] = useState("");



    //single input(Setter for a single variable-State!) --------------
    const [name, setName] = useState<string>("");
    const onNameChange = (event:ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value);
        setName(event.target.value);
    }

    //multiple/dynamic input(Setter for a Object-State!) ---------
    const [newCharacter, setNewCharacter] = useState<Character>({id: 0, name: "", status: "", species: ""});
    const onNewCharacterChange = (event:ChangeEvent<HTMLInputElement>)=>{
        //console.log(event.target.value);
        //console.log(event.target.name)
        setNewCharacter({...newCharacter, [event.target.name]: event.target.value});

    }

    const onCharacterSubmit = (event:  FormEvent<HTMLFormElement>)=>{
        //console.log("submit");
        event.preventDefault();
        //setCharacters([...characters, newCharacter])
        props.saveCharacter(newCharacter);

    }



    const filteredCharacters = props.characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));

    return(
        <div>
            <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
            {
                filteredCharacters.length > 0
                    ? <CharacterGallery characters={filteredCharacters}/>
                    : <p>No characters found</p>
            }

            <input onChange={onNameChange} value={name} placeholder={"Name - a example how to write a single input"} name={"name"}/>

            <form onSubmit={onCharacterSubmit}>
                <input type={"number"} onChange={onNewCharacterChange} value={newCharacter.id} placeholder={"Id"} name={"id"}/>
                <input onChange={onNewCharacterChange} value={newCharacter.name} placeholder={"Name"} name={"name"}/>
                <input onChange={onNewCharacterChange} value={newCharacter.species} placeholder={"Species"}
                       name={"species"}/>
                <input onChange={onNewCharacterChange} value={newCharacter.status} placeholder={"Status"}
                       name={"status"}/>
                <button>
                    Save
                </button>
            </form>


        </div>

    )
}