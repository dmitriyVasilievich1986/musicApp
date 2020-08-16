import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSongs, selectSong, changeStatus } from '../actions/musicActions'
import Song from './Song'

class SongList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            song: new Audio(),
            value: 0,
            duration: 0,
            songSelected: false,
            currentSong: 0
        }
    }
    componentDidMount() {
        this.props.getSongs()
        this.props.song.onended = e => {
            this.props.song.pause()
            this.props.song.currentTime = 0
            const nextSong = +this.state.currentSong + 1 === this.props.songList.length ? 0 : +this.state.currentSong + 1
            this.props.selectSong(this.props.songList[nextSong])
            this.props.song.play()
        }
    }

    render() {
        return (
            <div>
                <h1 className="text-center p-3">Song List:</h1>
                <ul className="list-group" style={{ "marginBottom": "3cm" }}>
                    {this.props.songList.map((song, index) =>
                        <li className="list-group-item d-flex ml-4 mr-4 justify-content-between align-items-center" key={index}>
                            <img src={song.cover_path} style={{ "width": "50px", "height": "50ps" }} />
                            <h3 className="ml-4">{song.name}</h3>
                            <button
                                className="btn btn-sm btn-primary"
                                onClick={e => {
                                    this.setState({
                                        songSelected: true,
                                        currentSong: index
                                    })
                                    this.props.selectSong(song)
                                }}>
                                Select</button>
                        </li>
                    )}
                </ul>
                {this.state.songSelected ? <Song /> : ""}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    songList: state.musicList.musicList,
    song: state.musicList.song
})

export default connect(mapStateToProps, { getSongs, selectSong, changeStatus })(SongList)