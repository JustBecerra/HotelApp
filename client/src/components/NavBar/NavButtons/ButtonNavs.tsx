import './ButtonNavs.css';
import { Link } from "react-router-dom"

export default function ButtonNavs(){
    return(
        <div className='buttonContainer'>
            <Link to={'/'}>
                <button className='individualButton'>Home</button>
            </Link>
            <button className='individualButton'>Gallery</button>
            <button className='individualButton'>About</button>
        </div>
    )
}