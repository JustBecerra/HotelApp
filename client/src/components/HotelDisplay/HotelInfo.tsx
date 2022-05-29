import { useSelector } from "react-redux"
import { typeState } from "../redux/reducer"
import { properties } from "../redux/types/Types"
import Hotel from "./singleHotel/Hotel"
import  loading  from "../../imgs/loading.gif"
import './HotelInfo.css'

export default function HotelInfo(){
    const hotels = useSelector((state: typeState) => state.properties)
    console.log(hotels)
    if(hotels.length !== 0){
    return(
      <div className="HotelsFeed">
        {hotels.map((h: properties) => {return (<Hotel 
        key={h.id} id={h.id} name={h.name} address={h.address} neighbourhood={h.neighbourhood}
        starRating={h.starRating} guestReviews={h.guestReviews} ratePlan={h.ratePlan} landmarks={h.landmarks}/>)})}
      </div>
    )}else{
      return(
        <div className="loading">
          <img src={loading} alt="loading" className="gif" />
        </div>
      )
    }
}