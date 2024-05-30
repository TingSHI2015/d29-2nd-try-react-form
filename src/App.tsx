import './App.css'

import {Route, Routes} from "react-router-dom";
import CharacterPage from "./pages/CharacterPage.tsx";
import Header from "./components/Header.tsx";
import HomePage from "./pages/HomePage.tsx";
import CharacterDetailsPage from "./pages/CharacterDetailsPage.tsx";

export default function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="characters" element={<CharacterPage/>}/>
                <Route path="/detail/:id" element={<CharacterDetailsPage/>}/>


            </Routes>


        </>


    );
}
