import axios from 'axios'
import { GET_LOCATIONS } from '../types/actionTypes'

export async function getProperties(cityname: string) {
  let info = await axios.get('http://localhost:3001/locations/search/' + cityname)
  let destinationArray = []
  for(var i=0; i < info.data.suggestions[1].entities.length; i++){
    destinationArray.push(info.data.suggestions[1].entities[i].destinationId)
  }
  // console.log(destinationArray)
  return ({type: GET_LOCATIONS, payload: info.data})
}