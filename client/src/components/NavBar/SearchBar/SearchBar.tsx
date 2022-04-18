import './SearchBar.css';
import React from 'react';
import ModalComp from './Modal/ModalComp';
import { typeState } from '../../redux/reducer';

export default function SearchButton(){
    const [search, setSearch] = React.useState('');
    const [modalIsOpen, setIsOpen] = React.useState(false);

    // const locations = useSelector((state: typeState) => state.locations);
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
      setSearch(e.target.value)
    }
    
    function openModal() {
      setIsOpen(true);
    }
      
    function closeModal() {
      setIsOpen(false);
    }
    
    const allowValue = () => {
      if(search.length > 0){
        return true
      }else{
        return false
      }
    }

    return(
        <>
            {/* <button onClick={openModal} className='NearButton'>
                Find hotels near me
            </button> */}
            <input 
              type='text' 
              placeholder='Search hotels in...'
              className='FindSearchBar'
              value={search}
              onChange={handleChange}
            />
            <button type='button' className='submitButton' onClick={openModal}>Search</button>
            
           <ModalComp searchV={allowValue() === true ? search : ''} modalIsOpen={modalIsOpen} closeModal={closeModal} setSearch={setSearch}/>
        </>
        
    )
}