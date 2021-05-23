import axios from 'axios'
import {API, KEY, LIMITS,SITE, WAPI} from '../config'
export const FETCH_GIPHY = 'FETCH_GIPHY'

export const FETCH_WEATHER = 'FETCH_WEATHER'


export function fetchGiphy (name){
    const url = API + name + KEY + LIMITS
    const request = axios.get(url)

    return{
        type: FETCH_GIPHY,
        payload: request
    }
}

export function fetchWeather  (name){
    const url = SITE + name + WAPI
    const request = axios.get(url)
    return{
        type: FETCH_WEATHER,
        payload: request
    }
}