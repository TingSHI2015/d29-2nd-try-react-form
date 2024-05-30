import {Link} from "react-router-dom";
import React from "react";
import CharacterPage from "../pages/CharacterPage.tsx";

export default function Header(){

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/characters">
                        Character
                    </Link>

                </li>
            </ul>



        </div>
    )

}