import './SearchBar.css';
import Modal from 'react-modal';
import React from 'react';
import { getLocations } from '../../redux/Actions/getLocations';
import { info } from 'console';
import { useDispatch, useSelector } from 'react-redux';
import { typeState } from '../../redux/reducer';

export default function SearchButton(){
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [search, setSearch] = React.useState(''); 
    const dispatch = useDispatch();
    const locations = useSelector((state: typeState) => state.locations);
    console.log(locations)
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
          dispatch(await getLocations(search));
          openModal();
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
              <div>
                <button onClick={closeModal}>X</button>
                {/* {locations.map((l:any) => {
                  return <p>{l.term}</p>
                })} */}
                
              </div>
            </Modal>
        </>
        
    )
}