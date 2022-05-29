import axios, { AxiosRequestConfig, AxiosResponse} from 'axios'
import { GET_PROPERTIES } from '../types/actionTypes'
import { ListType } from '../../NavBar/SearchBar/Modal/ModalComp'

export async function getProperties(searchV: string, list: ListType) {
  let locations = await axios.get('http://localhost:3001/locations/search/' + searchV)
  // let destinationArray = []
  // for(var i=0; i < locations.data.suggestions[1].entities.length; i++){
  //   destinationArray.push(locations.data.suggestions[0].entities[i].destinationId)
  // }

const options: AxiosRequestConfig = {
  method: 'GET',
  url: 'https://hotels-com-provider.p.rapidapi.com/v1/hotels/search',
  params: {
    checkin_date: list.checkIn,
    checkout_date: list.checkOut,
    sort_order: 'PRICE',
    destinationId: Number.parseInt(locations.data.suggestions[0].entities[0].destinationId),
    adults_number: '1',
    locale: 'en_US',
    currency: 'USD',
    // children_ages: '4,0,15',
    // price_min: '10',
    // star_rating_ids: '3,4,5',
    // accommodation_ids: '20,8,15,5,1',
    // price_max: '500',
    // page_number: '1',
    // theme_ids: '14,27,25',
    // amenity_ids: '527,2063',
    // guest_rating_min: '2'
  },
  headers: {
    'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
    'X-RapidAPI-Key': 'c9472fcbd6msh2b15be1905fcf79p11f9a5jsna646ce55c345'
  }
};
  
  try{
    let properties: AxiosResponse = await axios(options)
    return ({type: GET_PROPERTIES, payload: properties.data.data.body.searchResults.results})
  }catch(err){
    console.log(err)
  }
}

