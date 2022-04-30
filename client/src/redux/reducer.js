import {
    GET_DOGS,
    GET_TEMPERAMENTS,
    GET_DOGS_BY_NAME,
    GET_DETAIL_DOG,
    FILTER_BY_TEMPERAMENT,
    FILTER_BY_CREATED,
    ORDER_BY_WEIGHT,
    ORDER_BY_NAME,
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
                allDogs: action.payload
            }}
        case GET_DETAIL_DOG:{
            return {
                ...state,
                dogDetail: action.payload
            }}
        case FILTER_BY_TEMPERAMENT:{
            const allDogs = state.allDogs
            const byTemperaments = allDogs.filter(elem =>{
                if(elem.temperament){
                    return elem.temperament.includes(action.payload)
                } else if (elem.temperaments){
                    let temps = elem.map(e => e.temperament)
                    return temps.includes(action.payload) 
                } return null
            })
            return {
                ...state,
                allDogs: action.payload === "filterByTemp" ? allDogs : byTemperaments
            }}
            
        case FILTER_BY_CREATED:{ 
            // const createdFilter = action.payload === "dogsApi" ? state.allDogs.filter(elem => elem.createdInDB === false) :
            // state.allDogs.filter(elem => elem.createdInDB === true)
            let createdFilter = []
            if(action.payload === "dogsApi"){
                createdFilter =  state.allDogs.filter(e => !e.createdInDB)
            } else if(action.payload === "dogsDb"){ createdFilter = state.allDogs.filter(e => e.createdInDB === true)}
            return {
                ...state,
                allDogs: createdFilter
            }}
            
        case ORDER_BY_WEIGHT:{ 
            const allDogs = state.allDogs
            const filterDogs = state.dogs.filter(elem => elem.weight_max !== null)
            const orderByWeightMax = action.payload === 'desc' ? filterDogs.sort((x,y) => {
                if(x.weight_max < y.weight_max) return -1;
                if(x.weight_max > y.weight_max) return 1;
                return 0
            }) : filterDogs.sort((x,y) => {
                if(x.weight_max > y.weight_max) return -1;
                if(x.weight_max < y.weight_max) return 1;
                return 0
            })
            return {
                ...state,
                dogs: action.payload === 'all' ? allDogs : orderByWeightMax
            }}
        case ORDER_BY_NAME:{ 
            return {
                ...state,
                allDogs: createdFilter
            }}
        default: return state
    }
}
