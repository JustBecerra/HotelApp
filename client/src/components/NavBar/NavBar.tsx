import ButtonNavs from "./NavButtons/ButtonNavs"
import SearchBar from "./SearchBar/SearchBar"
import { Link } from "react-router-dom"
import './NavBar.css'

export default function NavBar(){
    return(
        <div className="navBackground">
            <header className="headerStyle">Hotel Tracker</header>
            <ButtonNavs />
            <SearchBar />
        </div>
    )
}