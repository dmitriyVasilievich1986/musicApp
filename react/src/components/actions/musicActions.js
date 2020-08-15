import TYPE_ACTIONS from './types'
import axios from 'axios'

export const getSongs = () => dispatch => {
    axios.get('/api/music/')
        .then(data => dispatch({
            type: TYPE_ACTIONS.GET_SONGS,
            payload: data.data
        }))
}

export const selectSong = newSong => dispatch => {
    dispatch({
        type: TYPE_ACTIONS.SELECT_SONG,
        payload: newSong
    })
}

export const getSong = () => dispatch => {
    dispatch({
        type: TYPE_ACTIONS.GET_SONG
    })
}

export const changeStatus = () => dispatch => {
    dispatch({
        type: TYPE_ACTIONS.CHANGE_STATUS,
        payload: true
    })
}