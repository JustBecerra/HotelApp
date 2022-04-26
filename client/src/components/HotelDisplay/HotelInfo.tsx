import { useSelector } from "react-redux"
import { typeState } from "../redux/reducer"
import { properties } from "../redux/types/Types"
import Hotel from "./singleHotel/Hotel"
import './HotelInfo.css'

export default function HotelInfo(){
    const hotels = useSelector((state: typeState) => state.properties)
    // console.log(hotels)
    return(
        <div className="HotelsFeed">
          {hotels.map((h: properties) => {return (<Hotel 
          key={h.id} id={h.id} name={h.name} address={h.address} locality={h.locality} 
          starRating={h.starRating} guestRating={h.guestRating} rateplan={h.rateplan}/>)})}
        </div>
    )
}