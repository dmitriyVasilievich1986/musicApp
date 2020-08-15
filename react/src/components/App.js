import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import SongList from './layout/SongList'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <SongList />
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))