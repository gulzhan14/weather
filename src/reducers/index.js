import { combineReducers } from "redux";
import giphy from './giphy-reducer'
import weather from './weather-reducer'
const rootReducer = combineReducers({
    giphy, weather
})


export default rootReducer