import './ModalComp.css'
import React from 'react';
import Modal from 'react-modal';
import { getProperties } from '../../../redux/Actions/getProperties';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export interface ListType {
  destinationId: string;
  checkIn: string,
  checkOut: string,
  sort_order: string[],
  children_ages?: string,
  rating?: string,
  price_min?: number,
  price_max?: number,
}

const listInfo = {
  destinationId: '',
  checkIn: '',
  checkOut: '',
  sort_order: [],
  children_ages: '',
  rating: '',
  price_min: 0,
  price_max: 0,
}

export default function ModalComp(props:{searchV: string, modalIsOpen: boolean, closeModal: () => void, setSearch: (value: string) => void}) {
    const dispatch = useDispatch();
    const [list,setList] = React.useState<ListType>(listInfo);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        props.closeModal();
        try{
          if(props.searchV){
            dispatch(await getProperties(props.searchV, list));
            props.setSearch('')
          } 
        }catch(err){
          console.log(err)
        }
    }
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setList({
            ...list,
            [e.target.name]: e.target.value
        })
    }

    function handleSelect(e: React.ChangeEvent<HTMLSelectElement>){

    }

    return(
        <>
          <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            ariaHideApp={false}
            className='ModalBG'
          >
            <form onSubmit={(e) => handleSubmit(e)} className='OverlayModal'>
              <label className='checkin'>Check-in date</label>
              <input type='date' onChange={(e) => handleChange(e)} name='checkIn' className='inputModal' placeholder='check-in date DD-MM-YY'/>
              <label className='checkout'>Check-out date</label>
              <input type='date' onChange={(e) => handleChange(e)} name='checkOut' className='inputModal' placeholder='check-out date DD-MM-YY'/>
              <input type='text' onChange={e => handleChange(e)} name='children ages' className='inputModal' placeholder='age of children(optional)'/>
              <select className='filter' onChange={e => handleSelect(e)}>
                <option value='PRICE'>Price</option>
                <option value='PRICE_HIGHEST_PRICE'>Highest price</option>
                <option value='GUEST_RATING'>Guest rating</option>
                <option value='DISTANCE_FROM_LANDMARK'>Closest to landmarks</option>
                <option value='BEST_SELLER'>Most popular</option>
                <option value='STAR_RATING_LOWEST_FIRST'>Lowest star rating</option>
                <option value='STAR_RATING_HIGHEST_FIRST'>Highest star rating</option>
              </select>
              <input type='text' onChange={(e) => handleChange(e)} name='rating' className='inputModal' placeholder='rating(optional)'/>
              <input type='number' onChange={(e) => handleChange(e)} name='minPrice' className='inputModal' placeholder='min price(optional)'/>
              <input type='number' onChange={(e) => handleChange(e)} name='maxPrice' className='inputModal' placeholder='max price(optional)'/>
              <Link to={'/hotels'}>
                <button type='submit' className='closeButton' >Search</button>
              </Link>
            </form>
          </Modal>
        </>
    )
}