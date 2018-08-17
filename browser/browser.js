import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { hydrate } from 'react-dom'

import Tournaments from '../src/Tournaments/Tournaments'
import { allReducers, theStore } from '../server/redux'

import ReadInCache from '../src/Redux/Caching/ReadInCache'
import WriteToCache from '../src/Redux/Caching/WriteToCache'

const store = createStore(allReducers, theStore, applyMiddleware(WriteToCache))

ReadInCache(store)

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Tournaments/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)