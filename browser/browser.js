import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { hydrate } from 'react-dom'

import Tournaments from '../src/Tournaments/Tournaments'
import { allReducers, theStore } from '../server/redux'

const store = createStore(allReducers, theStore)

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Tournaments/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)