  
import {FETCH_GIPHY} from '../actions'


export default (state =[], action)=> {

 switch (action.type) {
    case FETCH_GIPHY:
        return[action.payload.data.data]
 }
 return state
}