import './App.css'
import {Route, Routes} from "react-router-dom";
import CharacterPage from "./pages/CharacterPage.tsx";
import Header from "./components/Header.tsx";
import HomePage from "./pages/HomePage.tsx";
import CharacterDetailsPage from "./pages/CharacterDetailsPage.tsx";
import {useState} from "react";
import {Character} from "./types/RickAndMortyCharacter.ts";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;        //import * as axios from "axios";



export default function App() {
    const [characters, setCharacters] = useState<Character[]>([])

    const loadAllCharacters = () =>{
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                setCharacters(response.data.results)        //.results has a 's'!    (not .result)
                console.log("then is ok!")
            })
            .catch((error) => {console.log(error)})
            .finally(() =>{console.log("finally")})
    }

    //save new Character to a local List (without Axios)
/*    const saveCharacter = (newCharacter: Character) =>{
        setCharacters([...characters, newCharacter])
    }*/

    //save new Character to a remote List (with Axios)
    const saveCharacter = (newCharacter: Character) =>{
        axios.post("https://rickandmortyapi.com/api/character", newCharacter)
            .then((response)=>{
                console.log(response.data)
                //setCharacters([...characters, newCharacter])        //we don't use DTO-Character! the original version Character with Id is better!
                setCharacters([...characters, response.data])   //we don't use DTO-Character! the original version Character with Id is better!
            })
            .catch((error) => {console.log(error.message)})
            .finally(() =>{console.log("finally2")})

    }

    return (
        <>
            <Header/>

            <button onClick={loadAllCharacters}>GET</button>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="characters" element={<CharacterPage characters={characters} saveCharacter={saveCharacter}/>}/>
                <Route path="/characters/:id" element={<CharacterDetailsPage characters={characters}/>}/>


            </Routes>


        </>


    );
}
