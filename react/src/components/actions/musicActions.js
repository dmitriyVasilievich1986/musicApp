import TYPE_ACTIONS from './types'
import axios from 'axios'

export const getSongs = () => dispatch => {
    axios.get('/api/music/')
        .then(data => dispatch({
            type: TYPE_ACTIONS.GET_SONGS,
            payload: data.data
        }))
}

export const getSongsWithFilter = textFilter => dispatch => {
    console.log(textFilter)
    axios.get('/api/music/')
        .then(data => {
            const newList = data.data.filter(s => s.name.toLowerCase().indexOf(textFilter.toLowerCase()) > -1 || s.album.toLowerCase().indexOf(textFilter.toLowerCase()) > -1 || s.artist.toLowerCase().indexOf(textFilter.toLowerCase()) > -1)
            dispatch({
                type: TYPE_ACTIONS.GET_SONGS,
                payload: textFilter === '' ? data.data : newList
            })
        })
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

export const changeStatus = (song) => dispatch => {
    song.volume = 1
    const newStatus = {
        playButton: song.paused === true ? "Play" : "Pause",
        duration: song.duration
    }
    dispatch({
        type: TYPE_ACTIONS.CHANGE_STATUS,
        payload: newStatus
    })
}