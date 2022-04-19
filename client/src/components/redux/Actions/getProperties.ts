import axios, { AxiosRequestConfig, AxiosResponse} from 'axios'
import { GET_LOCATIONS } from '../types/actionTypes'
import { ListType } from '../../NavBar/SearchBar/Modal/ModalComp'

export async function getProperties(searchV: string, list: ListType) {
  let locations = await axios.get('http://localhost:3001/locations/search/' + searchV)
  let destinationArray = []
  for(var i=0; i < locations.data.suggestions[1].entities.length; i++){
    destinationArray.push(locations.data.suggestions[1].entities[i].destinationId)
  }

  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/properties/list',
    params: {
      destinationId: destinationArray[0],
      pageNumber: 1,
      pageSize: 25,
      checkIn: list.checkIn,
      checkOut: list.checkOut,
      adults1: list.firstRoom,
    },
    headers: {
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
      'X-RapidAPI-Key': 'c9472fcbd6msh2b15be1905fcf79p11f9a5jsna646ce55c345'
    }
  };
  console.log(typeof destinationArray[0])
  try{
    let properties: AxiosResponse = await axios(options)
    console.log(properties)
    return ({type: GET_LOCATIONS, payload: properties.data})
  }catch(err){
    console.log(err)
  }
  
  
}