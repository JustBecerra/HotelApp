import './ModalComp.css'
import React from 'react';
import Modal from 'react-modal';
import { getProperties } from '../../../redux/Actions/getProperties';
import { useDispatch } from 'react-redux';

export default function ModalComp(props:{searchV: string, modalIsOpen: boolean, closeModal: () => void, setSearch: (value: string) => void}) {
    const dispatch = useDispatch();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try{
          if(props.searchV){
            dispatch(await getProperties(props.searchV));
            props.setSearch('')
          } 
        }catch(err){
          console.log(err)
        }
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
                  <input type='date' className='inputModal' placeholder='check-in date DD-MM-YY'/>
                  <label className='checkout'>Check-out date</label>
                  <input type='date' className='inputModal' placeholder='check-out date DD-MM-YY'/>
                  <input type='number' className='inputModal' placeholder='number of guests in first room'/>
                  <input type='number' className='inputModal' placeholder='number of guests in second room'/>
                  <input type='number' className='inputModal' placeholder='number of guests in third room'/>
                  <input type='text' className='inputModal' placeholder='age of children in first room'/>
                  <input type='text' className='inputModal' placeholder='age of children in second room'/>
                  <input type='text' className='inputModal' placeholder='age of children in third room'/>
                  <input type='text' className='inputModal' placeholder='rating'/>
                  <input type='number' className='inputModal' placeholder='min price'/>
                  <input type='number' className='inputModal' placeholder='max price'/>
                  <button type='submit' className='closeButton'>Search</button>
                </form>
                
            </Modal>
        </>
    )
}