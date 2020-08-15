import React, { Component } from 'react'

class SelSong extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary">Play</button>
                <button className="btn btn-primary">Pause</button>
                {this.props.song.currentTime}
            </div>
        )
    }
}

export default SelSong