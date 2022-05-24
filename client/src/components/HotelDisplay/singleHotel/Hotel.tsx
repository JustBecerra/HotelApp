import { properties } from "../../redux/types/Types"
import { getDetails } from "../../redux/Actions/getDetails";
import { typeState } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Modal from "react-modal"
import './Hotel.css'

export default function Hotel(props:properties){
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const dispatch = useDispatch()
    const details = useSelector((state: typeState) => state.propDetail)
    console.log(details)
    function openModal() {
        setIsOpen(true);
    }
        
    function closeModal() {
        setIsOpen(false);
    }

    async function retrieveDetails(){
        dispatch(await getDetails(props.id))
        openModal()
    }

    return(
        <>
            <div className="Hcontainer" onClick={retrieveDetails}>
                <h5 className="Hinfo">{props.name}</h5>
                <h5 className="Hinfo">{props.starRating} Star Hotel</h5>
                <h5 className="Hinfo">Neighbourhood: {props.neighbourhood}</h5>
                <h5 className="Hinfo">{props.guestReviews.rating}/{props.guestReviews.scale} out of {props.guestReviews.total} guest reviews</h5>
                <h5 className="Hinfo">{props.ratePlan.price.current} per night</h5>
            </div>
          
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                className='modal-content'
            >
                <h5>{props.name}</h5>
                <h5 className="Hinfo">Address: {props.address.streetAddress}</h5>
                 <div className="Hinfo">
                    Landmarks nearby:
                    {props.landmarks ? props.landmarks.map((l:any) => {return <h5 className="landmarkinfo" key={l.label}>{l.label} {l.distance}</h5>}) : 'no landmarks nearby'}
                 </div>
                <button type='button' onClick={closeModal}>back</button>
              
            </Modal>    
          </>
        
    )
}