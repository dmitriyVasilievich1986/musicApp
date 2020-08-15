import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSongs, selectSong, changeStatus } from '../actions/musicActions'
import SelSong from './SelSong'
import Song from './Song'

class SongList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            song: new Audio(),
            value: 0,
            duration: 0
        }
        this.onChange = this.onChange.bind(this)
    }
    componentDidMount() {
        this.props.getSongs()
    }
    onChange(e) {
        e.preventDefault()
        this.state.song.currentTime = e.target.value
    }
    render() {
        return (
            <div>
                <h1>Song List</h1>
                <Song />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    songList: state.musicList.musicList,
    song: state.musicList.song
})

export default connect(mapStateToProps, { getSongs, selectSong, changeStatus })(SongList)