import musicReducer from './musicReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    musicList: musicReducer
})