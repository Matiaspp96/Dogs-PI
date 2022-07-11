import {
    GET_DOGS,
    GET_TEMPERAMENTS,
    GET_DOGS_BY_NAME,
    GET_DETAIL_DOG,
    FILTER_BY_TEMPERAMENT,
    FILTER_BY_CREATED,
    ORDER_BY_WEIGHT,
    ORDER_BY_NAME,
    PAGINATION,
} from './actions';

let initialState = {
    dogs: [],
    allDogs: [],
    filter: [],
    temperaments: [],
    dogDetail: [],
    pagination: 1
}

export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_DOGS: {
            return {
                ...state,
                dogs: payload,
                allDogs: payload,
                // filter: payload
            }
        }
        case GET_TEMPERAMENTS: {
            return {
                ...state,
                temperaments: payload
            }
        }
        case GET_DOGS_BY_NAME: {
            return {
                ...state,
                filter: payload
            }
        }
        case GET_DETAIL_DOG: {
            return {
                ...state,
                dogDetail: payload
            }
        }
        case FILTER_BY_TEMPERAMENT: {
            const filterDogs = state.allDogs
            const byTemperaments = filterDogs.filter(elem => {
                if (elem.temperament) {
                    return elem.temperament.includes(payload)
                } else if (elem.temperaments) {
                    if (typeof elem === "object") {
                        let temps = elem.temperaments.map(e => e.temperament)
                        return temps.includes(payload)
                    }
                    let temps = elem.map(e => e.temperament)
                    return temps.includes(payload)
                } return null
            })
            return {
                ...state,
                filter: payload === "filterByTemp" ? state.allDogs : byTemperaments,
            }
        }

        case FILTER_BY_CREATED: {
            // const createdFilter = payload === "dogsApi" ? state.allDogs.filter(elem => elem.createdInDB === false) :
            // state.allDogs.filter(elem => elem.createdInDB === true)
            let allDog = state.allDogs
            let createdFilter = []
            if (payload === "dogsApi") {
                createdFilter = allDog.filter(e => !e.createdInDB)
            } else if (payload === "dogsDb") {
                createdFilter = allDog.filter(e => e.createdInDB === true)
            }
            return {
                ...state,
                filter: payload === "allDogs" ? allDog : createdFilter
            }
        }

        case ORDER_BY_WEIGHT: {
            const orderDogs = state.filter.length > 0 ? state.filter : state.allDogs
            const filterDogs = orderDogs.filter(elem => elem.weight_max !== null)
            let orderByWeightMax = [];
            if (payload === 'asc') {
                orderByWeightMax = filterDogs.sort((x, y) => {
                    if (x.weight_max < y.weight_max) return -1;
                    if (x.weight_max > y.weight_max) return 1;
                    return 0
                })
            }
            if (payload === 'desc') {
                orderByWeightMax = filterDogs.sort((x, y) => {
                    if (x.weight_max > y.weight_max) return -1;
                    if (x.weight_max < y.weight_max) return 1;
                    return 0
                })
            }
            return {
                ...state,
                filter: payload === 'dogs' ? state.allDogs : orderByWeightMax
            }
        }
        case ORDER_BY_NAME: {
            const orderDogs = state.filter.length > 0 ? state.filter : state.allDogs
            let orderByNameBreed = [];
            if (payload === 'asc') {
                orderByNameBreed = [...orderDogs].sort((x, y) => {
                    if (x.name < y.name) return -1
                    if (x.name > y.name) return 1
                    return 0
                })
            }
            if (payload === 'desc') {
                orderByNameBreed = [...orderDogs].sort((x, y) => {
                    if (x.name > y.name) return -1
                    if (x.name < y.name) return 1
                    return 0
                })
            }
            console.log(orderByNameBreed, payload)
            return {
                ...state,
                filter: payload === 'dogs' ? state.allDogs : orderByNameBreed
            }
        }
        case PAGINATION: {
            return {
                ...state,
                page: payload
            }
        }
        default: return state
    }
}
