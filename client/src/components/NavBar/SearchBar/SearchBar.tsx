import './SearchBar.css';
import Modal from 'react-modal';
import React from 'react';

export default function SearchButton(){
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [search, setSearch] = React.useState(''); 

    function openModal() {
      setIsOpen(true);
    }
      
    function closeModal() {
      setIsOpen(false);
    }
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
      setSearch(e.target.value)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault();
      if(search){
        
        openModal();

      }    
    }

    console.log(search)
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
                
              </div>
            </Modal>
        </>
        
    )
}