import React from 'react';
import { Route } from "react-router-dom";
import Login from '../../Views/Login';

export default function () {
    return (
        <Route path="/login" exact>
            <Login />
        </Route>
    )
}