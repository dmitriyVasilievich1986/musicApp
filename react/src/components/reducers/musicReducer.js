import TYPE_ACTIONS from '../actions/types'

const initState = {
    musicList: [],
    songMeta: {},
    song: new Audio(),
    duration: 0,
    canPlay: false,
    playButton: "Play"
}

export default function (state = initState, action) {
    switch (action.type) {
        case TYPE_ACTIONS.CHANGE_STATUS:
            return {
                ...state,
                playButton: action.payload.playButton,
                duration: action.payload.duration
            }
        case TYPE_ACTIONS.GET_SONG:
            return {
                ...state
            }
        case TYPE_ACTIONS.SELECT_SONG:
            if (!state.song.paused)
                state.song.pause()
            state.song.src = action.payload.file_path
            state.song.currentTime = 0
            state.song.volume = 1
            return {
                ...state,
                songMeta: action.payload,
                canPlay: false,
                playButton: "Play"
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