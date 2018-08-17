import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Routes from './Routes/Routes.js'

class Tournaments extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    {Routes.map(({ path, component, exact }) =>
                        <Route
                            key={path}
                            path={path}
                            component={component}
                            exact={exact}
                        />
                    )}
                </Switch>
            </React.Fragment>
        );
    }
}

export default Tournaments