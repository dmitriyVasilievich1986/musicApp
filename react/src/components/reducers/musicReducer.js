import TYPE_ACTIONS from '../actions/types'

const initState = {
    musicList: [],
    songMeta: {},
    song: new Audio(),
    canPlay: false
}

export default function (state = initState, action) {
    switch (action.type) {
        case TYPE_ACTIONS.CHANGE_STATUS:
            return {
                ...state,
                canPlay: action.payload
            }
        case TYPE_ACTIONS.GET_SONG:
            return {
                ...state
            }
        case TYPE_ACTIONS.SELECT_SONG:
            return {
                ...state,
                songMeta: action.payload,
                song: new Audio(action.payload.file_path),
                canPlay: false
            }
        case TYPE_ACTIONS.GET_SONGS:
            return {
                ...state,
                musicList: action.payload
            }
        default:
            return state
    }
}