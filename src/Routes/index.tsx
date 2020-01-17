import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
export function UnauthneticatedRoutes() {
    return (
        <Switch>
            <Login />
        </Switch>
    )
}

export function AuthenticatedRoutes() {

    return (
        <Switch>
            <Dashboard />
        </Switch>
    )

}