import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'

import Tournaments from '../src/Tournaments/Tournaments'

hydrate(
    <BrowserRouter>
        <Tournaments/>
    </BrowserRouter>,
    document.getElementById('root')
)