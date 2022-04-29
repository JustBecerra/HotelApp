import { locations, properties, details } from '../types/Types';
import {
    GET_DETAILS,
    GET_PROPERTIES,
} from '../types/actionTypes';

import { FilterActionTypes } from '../types/actionTypes';

export interface typeState{
    locations: Array<locations>
    properties: Array<properties>
    propDetail: Array<details>
}

const initialState: typeState = {
    locations:[],
    properties:[],
    propDetail:[],
}

export default function rootReducer(state = initialState, action:FilterActionTypes){
    switch (action.type) {
        case GET_PROPERTIES:
            return {
                ...state,
                properties: action.payload
            }
        case GET_DETAILS:
            return{
                ...state,
                propDetail: action.payload
            }
        default:
            return state
    }
}
