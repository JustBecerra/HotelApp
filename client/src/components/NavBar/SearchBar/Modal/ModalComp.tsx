import './ModalComp.css'
import React from 'react';
import Modal from 'react-modal';
import { getProperties } from '../../../redux/Actions/getProperties';
import { useDispatch } from 'react-redux';

export interface ListType {
  destinationId: string;
  checkIn: string,
  checkOut: string,
  firstRoom: number,
  secondRoom?: number,
  thirdRoom?: number,
  firstChildren?: string,
  secondChildren?: string,
  thirdChildren?: string,
  rating?: string,
  minPrice?: number,
  maxPrice?: number,
}

const listInfo = {
  destinationId: '',
  checkIn: '',
  checkOut: '',
  firstRoom: 0,
  secondRoom: 0,
  thirdRoom: 0,
  firstChildren: '',
  secondChildren: '',
  thirdChildren: '',
  rating: '',
  minPrice: 0,
  maxPrice: 0,
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
              <input type='number' onChange={(e) => handleChange(e)} name='firstRoom' className='inputModal' placeholder='number of guests in first room'/>
              <input type='number' onChange={(e) => handleChange(e)} name='secondRoom' className='inputModal' placeholder='number of guests in second room'/>
              <input type='number' onChange={(e) => handleChange(e)} name='thirdRoom' className='inputModal' placeholder='number of guests in third room'/>
              <input type='text' onChange={(e) => handleChange(e)} name='firstChildren' className='inputModal' placeholder='age of children in first room'/>
              <input type='text' onChange={(e) => handleChange(e)} name='secondChildren' className='inputModal' placeholder='age of children in second room'/>
              <input type='text' onChange={(e) => handleChange(e)} name='thirdChildren' className='inputModal' placeholder='age of children in third room'/>
              <input type='text' onChange={(e) => handleChange(e)} name='rating' className='inputModal' placeholder='rating'/>
              <input type='number' onChange={(e) => handleChange(e)} name='minPrice' className='inputModal' placeholder='min price'/>
              <input type='number' onChange={(e) => handleChange(e)} name='maxPrice' className='inputModal' placeholder='max price'/>
              <button type='submit' className='closeButton' >Search</button>
            </form>
          </Modal>
        </>
    )
}