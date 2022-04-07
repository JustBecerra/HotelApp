import ButtonNavs from "./NavButtons/ButtonNavs"
import SearchButton from "./SearchButton/SearchButton"
import './NavBar.css'

export default function NavBar(){
    return(
        <div className="navBackground">
            <header className="headerStyle">Hotel Tracker</header>
            <ButtonNavs />
            <SearchButton />
        </div>
    )
}