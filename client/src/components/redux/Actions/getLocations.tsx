import axios from 'axios'
import { GET_LOCATIONS } from '../types/actionTypes'

export async function getLocations(cityname: string) {
  let info = await axios.get('http://localhost:3001/locations/search/' + cityname)
  return ({type: GET_LOCATIONS, payload: info.data})
}