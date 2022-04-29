import axios from 'axios';
import { GET_DETAILS } from '../types/actionTypes';

export async function getDetails(id: string){
    const propDetails = await axios.get('http://localhost:3001/properties/details?id=' + id)
    return({type: GET_DETAILS, payload: propDetails.data.data.body.overview})
}