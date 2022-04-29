import {
    GET_DOGS,
    GET_TEMPERAMENTS,
    GET_DOGS_BY_NAME,
    GET_DETAIL_DOG,
    ORDER_BY_TEMPERAMENT,
    ORDER_BY_CREATED
} from './actions';

let initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    dogDetail: [],
}

export function reducer(state = initialState, action){
    switch(action.type){
        case GET_DOGS:{
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
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
        case GET_DETAIL_DOG:{
            return {
                ...state,
                dogDetail: action.payload
            }}
        case ORDER_BY_TEMPERAMENT:{
            const allDogs = state.dogs
            const temperaments = allDogs.filter(elem =>{
                if(elem.temperament){
                    return elem.temperament.includes(action.payload)
                } else if (elem.temperaments){
                    let temps = elem.map(e => e.temperament)
                    return temps.includes(action.payload) 
                } return null
            })
            return {
                ...state,
                dogs: action.payload === "filterByTemp" ? allDogs : temperaments
            }}
            
        case ORDER_BY_CREATED:{ 
            // const createdFilter = action.payload === "dogsApi" ? state.allDogs.filter(elem => elem.createdInDB === false) :
            // state.allDogs.filter(elem => elem.createdInDB === true)
            let createdFilter = []
            if(action.payload === "dogsApi"){
                createdFilter =  state.allDogs.filter(e => !e.createdInDB)
            } else if(action.payload === "dogsDb"){ createdFilter = state.allDogs.filter(e => e.createdInDB === true)}
            console.log(createdFilter)
            return {
                ...state,
                allDogs: createdFilter
            }}
        default: return state
    }
}
