import React from 'react';
import Dashboard from './../../Views/Dashboard';
import PrivateRoute from './../PrivateRoute';
export default function () {
    return (
        <PrivateRoute path="/dashboard" exact >
            <Dashboard />
        </PrivateRoute>
    )
}