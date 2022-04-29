import { locations, properties, details } from "./Types";

export const GET_LOCATIONS = 'GET_LOCATIONS';
export const GET_PROPERTIES = 'GET_PROPERTIES';
export const GET_DETAILS = 'GET_DETAILS'

export interface getLocations {
    type: typeof GET_LOCATIONS,
    payload: Array<locations>
}

export interface getProperties {
    type: typeof GET_PROPERTIES,
    payload: Array<properties>
}

export interface getDetails {
    type: typeof GET_DETAILS,
    payload: Array<details>
}

export type FilterActionTypes = getLocations | getProperties | getDetails;