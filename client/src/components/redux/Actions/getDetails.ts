import axios from 'axios';
import { GET_DETAILS } from '../types/actionTypes';

export async function getDetails(id: number){
    try{
        const propDetails = await axios.get('http://localhost:3001/properties/details?id=' + id)
        console.log(propDetails)
        return({type: GET_DETAILS, payload: propDetails.data})
    }catch(err: any){
        console.log(err.message)
    }
}