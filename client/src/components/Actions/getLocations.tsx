import axios from 'axios'

export async function getLocations(cityname: string) {
  let info = await axios.get('/locations/search')
}