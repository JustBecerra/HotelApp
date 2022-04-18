import axios from 'axios'
import { GET_LOCATIONS } from '../types/actionTypes'
import { ListType } from '../../NavBar/SearchBar/Modal/ModalComp'

export async function getProperties(searchV: string, list: ListType) {
  let info = await axios.get('http://localhost:3001/locations/search/' + searchV)
  let destinationArray = []
  for(var i=0; i < info.data.suggestions[1].entities.length; i++){
    destinationArray.push(info.data.suggestions[1].entities[i].destinationId)
  }
  // console.log(destinationArray)
  return ({type: GET_LOCATIONS, payload: info.data})
}