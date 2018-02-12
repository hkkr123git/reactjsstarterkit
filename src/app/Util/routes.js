import React from  "react";
import {
    BrowserRouter,
    HashRouter,
    Route,
    Redirect,
    Link,
    Switch,
    IndexRoute,
    browserHistory
  } from 'react-router-dom';
import {PrivateRoute} from "./privateRoute";

import {Landing} from "../components/Layout/Landing";
import Dashboard from "../components/Dashboard/Dashboard";

export const RiverRoutes = () => {
    return (
        <HashRouter history={browserHistory}>
          <Switch>
            <Route exact path="/" render={() => (
                <Redirect to="/login"/>
            )}/>
            <Route exact path="/login/:message?" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </HashRouter>
    );
};

function requireAuth() {
}