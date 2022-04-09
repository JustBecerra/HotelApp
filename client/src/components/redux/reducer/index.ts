import { locations } from '../types/Types';
import {
    GET_LOCATIONS,
} from '../types/actionTypes';

import { FilterActionTypes } from '../types/actionTypes';

const initialState = {
    locations:[],
}

export default function rootReducer(state = initialState, action:FilterActionTypes){
    switch (action.type) {
        case GET_LOCATIONS:
            return {
                ...state,
                locations: action.payload
            }
        default:
            return state
    }
}
