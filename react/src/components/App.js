import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import SongList from './layout/SongList'
import Navbar from './layout/Navbar'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navbar />
                <Fragment>
                    <SongList />
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))