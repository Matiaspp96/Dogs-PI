import axios from 'axios';

export const GET_DOGS = 'GET_DOGS'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'

export function getAllDogs(){
    return function (dispatch){
        return axios('http://localhost:3001/dogs')
        .then(res => dispatch({type: GET_DOGS , payload: res.data}))
        .catch(err => console.log(err))
    }
}

export function getAllTemperaments(){
    return function (dispatch){
        return axios('http://localhost:3001/temperaments')
        .then(res => dispatch({type: GET_TEMPERAMENTS , payload: res.data}))
        .catch(err => console.log(err))
    }
}

export function createDog(dog){
    return function (dispatch){
        axios.post('http://localhost:3001/dog', dog)
        .then(res => res.data)
        .catch(err => console.log(err))
    }
} 