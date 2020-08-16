import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSongsWithFilter } from '../actions/musicActions'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="form-inline my-2 my-lg-0">
                        <input value={this.state.value} onChange={e => this.setState({ value: e.target.value })} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button
                            class="btn btn-outline-success my-2 my-sm-0"
                            onClick={e => {
                                e.preventDefault()
                                this.props.getSongsWithFilter(this.state.value)
                                this.setState({ value: '' })
                            }
                            } >
                            Search</button>
                    </form>
                </div>
            </nav >
        )
    }
}

export default connect(null, { getSongsWithFilter })(Navbar)