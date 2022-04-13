import { locations, properties } from '../types/Types';
import {
    GET_LOCATIONS,
    GET_PROPERTIES,
} from '../types/actionTypes';

import { FilterActionTypes } from '../types/actionTypes';

export interface typeState{
    locations: Array<locations>
    properties: Array<properties>
}

const initialState: typeState = {
    locations:[],
    properties:[]
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
