import { locations, properties } from "./Types";

export const GET_LOCATIONS = 'GET_LOCATIONS';
export const GET_PROPERTIES = 'GET_PROPERTIES';

export interface getLocations {
    type: typeof GET_LOCATIONS,
    payload: Array<locations>
}

export interface getProperties {
    type: typeof GET_PROPERTIES,
    payload: Array<properties>
}

export type FilterActionTypes = getLocations | getProperties;