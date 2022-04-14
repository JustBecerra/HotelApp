import './SearchBar.css';
import Modal from 'react-modal';
import React from 'react';
import { getProperties } from '../../redux/Actions/getProperties';
import { info } from 'console';
import { useDispatch, useSelector } from 'react-redux';
import { typeState } from '../../redux/reducer';

export default function SearchButton(){
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [search, setSearch] = React.useState(''); 
    const dispatch = useDispatch();
    const locations = useSelector((state: typeState) => state.locations);
  
    function openModal() {
      setIsOpen(true);
    }
      
    function closeModal() {
      setIsOpen(false);
    }
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
      setSearch(e.target.value)
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault();
      try{
        if(search){
          openModal();
          dispatch(await getProperties(search));
          
          setSearch('')
        } 
      }catch(err){
        console.log(err)
      }
         
    }

    return(
        <>
            {/* <button onClick={openModal} className='NearButton'>
                Find hotels near me
            </button> */}
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Search hotels in...'
                    className='FindSearchBar'
                    value={search}
                    onChange={handleChange}
                />
                <button type='submit' className='submitButton'>Search</button>
            </form>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                className='ModalBG'
            >
                <button onClick={closeModal} className='closeButton' >X</button>
                <form className='OverlayModal'>
                  <input type='date' className='inputModal' placeholder='check-in date'/>
                  <input type='date' className='inputModal' placeholder='check-out date'/>
                  <input type='number' className='inputModal' placeholder='number of guests in first room'/>
                  <input type='number' className='inputModal' placeholder='number of guests in second room'/>
                  <input type='number' className='inputModal' placeholder='number of guests in third room'/>
                  <input type='text' className='inputModal' placeholder='age of children in first room'/>
                  <input type='text' className='inputModal' placeholder='age of children in second room'/>
                  <input type='text' className='inputModal' placeholder='age of children in third room'/>
                  <input type='text' className='inputModal' placeholder='rating'/>
                  <input type='number' className='inputModal' placeholder='min price'/>
                  <input type='number' className='inputModal' placeholder='max price'/>
                </form>
            </Modal>
        </>
        
    )
}