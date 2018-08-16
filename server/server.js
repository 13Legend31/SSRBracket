import React from 'react';
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import express from 'express'
import fs from 'fs'
import path from 'path'

import Tournaments from '../src/Tournaments/Tournaments'
import { allReducers, theStore } from './redux.js'

const store = createStore(allReducers,theStore)

const html = fs.readFileSync(path.resolve('public/index.html'), 'utf8')
const markup = renderToString(
    <Provider store={store}>
        <Tournaments/>
    </Provider>
)
const renderedHTML = html.replace('<!-- APP GOES IN HERE -->', markup)

const app = express()
app.use(express.static('public'))

app.get ('/', (req, res) => {
    console.log(req.url)
    res.send(renderedHTML)
})

app.listen(3000)