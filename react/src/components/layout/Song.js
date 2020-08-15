import React, { Component } from 'react'
import { connect } from 'react-redux'

class Song extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
        this.state = {
            duration: 0,
            value: 0
        }
    }
    componentDidMount() {
        this.props.song.src = "static/01_-_Death_Is_Not_Defeat.mp3"
        this.props.song.ontimeupdate = e => this.setState({ value: this.props.song.currentTime })
    }
    onClick(e) {
        this.props.song.play()
        this.setState({ duration: this.props.song.duration })
    }
    render() {
        return (
            <div>
                <h1>{this.props.meta.name}</h1>
                <button onClick={this.onClick}>Play</button>
                <button onClick={e => this.props.song.pause()}>Pause</button>
                <input max={this.state.duration} value={this.state.value} onChange={e => this.props.song.currentTime = e.target.value} type="range" />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    song: state.musicList.song,
    canPlay: state.musicList.canPlay,
    meta: state.musicList.songMeta
})

export default connect(mapStateToProps, null)(Song)