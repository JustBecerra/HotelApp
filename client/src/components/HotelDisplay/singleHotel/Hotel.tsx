import { properties } from "../../redux/types/Types"
import './Hotel.css'

export default function Hotel(props:properties){
    return(
        <div className="Hcontainer">
            <h5 className="Hinfo">{props.name}</h5>
            <h5 className="Hinfo">{props.starRating} Star Hotel</h5>
            <h5 className="Hinfo">{props.guestReviews.rating}/{props.guestReviews.scale} out of {props.guestReviews.total} guest reviews</h5>
            <h5 className="Hinfo">Address: {props.address.streetAddress}</h5>
            <h5 className="Hinfo">Neighbourhood: {props.neighbourhood}</h5>
            <h5 className="Hinfo">{props.ratePlan.price.current} per night</h5>
            <h5 className="Hinfo">Landmarks nearby:
                {props.landmarks ? props.landmarks.map((l:any) => {return <h5 className="landmarkinfo">{l.label} {l.distance}</h5>}) : 'no landmarks nearby'}
            </h5>
        </div>
    )
}