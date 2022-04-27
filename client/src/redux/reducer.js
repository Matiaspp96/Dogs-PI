import {
    GET_DOGS,
    GET_TEMPERAMENTS,
    GET_DOGS_BY_NAME
} from './actions';

let initialState = {
    dogs: [],
    temperaments: [],
    dog: {},
}

export function reducer(state = initialState, action){
    switch(action.type){
        case GET_DOGS:{
            return {
                ...state,
                dogs: action.payload
            }}
        case GET_TEMPERAMENTS:{
            return {
                ...state,
                temperaments: action.payload
            }}
        case GET_DOGS_BY_NAME:{
            return {
                ...state,
                dogs: action.payload
            }}
        default: return state
    }
}
