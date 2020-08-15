import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeStatus } from '../actions/musicActions'
import Slider from '@material-ui/core/Slider'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'

class Song extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
        this.state = {
            duration: 1,
            value: 1,
            songCount: 0
        }
    }
    componentDidMount() {
        this.props.song.ontimeupdate = e => this.setState({ value: this.props.song.currentTime })
    }
    onClick(e) {
        if (this.props.song.paused === true) {
            this.props.song.play()
            this.props.song.volume = 1
            this.setState({ duration: this.props.song.duration })
            this.props.changeStatus(this.props.song)
        } else {
            this.props.song.pause()
            this.props.changeStatus(this.props.song)
        }
    }
    render() {
        return (
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <Slider
                    max={this.state.duration}
                    value={this.state.value}
                    onChange={(e, val) => {
                        e.preventDefault()
                        this.props.song.currentTime = val
                    }} />
                {this.props.playButton === "Play" ?
                    <PlayCircleOutlineIcon fontSize="large" color="primary" onClick={this.onClick} /> :
                    <PauseCircleOutlineIcon fontSize="large" color="primary" onClick={this.onClick} />}
                <h2>{this.props.meta.album} - {this.props.meta.name}</h2>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    song: state.musicList.song,
    canPlay: state.musicList.canPlay,
    playButton: state.musicList.playButton,
    meta: state.musicList.songMeta
})

export default connect(mapStateToProps, { changeStatus })(Song)