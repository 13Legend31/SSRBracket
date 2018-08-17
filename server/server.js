import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import express from 'express'

import Tournaments from '../src/Tournaments/Tournaments'
import { allReducers, theStore } from './redux.js'

const store = createStore(allReducers, theStore)

const app = express()
app.use(express.static('public'))

app.get ('*', (req, res) => {
    const markup = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <Tournaments/>
            </StaticRouter>
        </Provider>
    )
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <title>Easy Bracket</title>
        <script src='/bundle.js' defer></script>
      </head>
      
      <body>
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <div id="root">${markup}</div>
      </body>
    </html>`)
})

  app.listen(1337)