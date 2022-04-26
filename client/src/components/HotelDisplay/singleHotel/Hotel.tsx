import { properties } from "../../redux/types/Types"
import './Hotel.css'

export default function Hotel(props:properties){
    // console.log(props.address)
    return(
        <div className="Hcontainer">
            <h5>{props.name}</h5>
            <h5>{props.address.streetAddress}</h5>
            <h5>{props.guestRating.rating}</h5>
            {/* <h5>{props.locality}</h5> */}

        </div>
    )
}