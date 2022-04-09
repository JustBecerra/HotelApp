import { locations } from "./Types";

export const GET_LOCATIONS = 'GET_LOCATIONS';

export interface getLocations {
    type: typeof GET_LOCATIONS,
    payload: Array<locations>
}

export type FilterActionTypes = getLocations