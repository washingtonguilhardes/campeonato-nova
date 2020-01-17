import React from 'react'
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';
import { useAuth } from '../../Services/Authentication';


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ children, ...rest }: RouteProps) {
    const session = useAuth();
    const location = useLocation<{ showLoader?: boolean }>();
    const state = location.state;
    console.log(` PrivateRoute({ children, ...rest }: RouteProps) `, { state });
    if (session.initializing) {
        return location.state ? <div>Aguarde...</div> : null
    }
    return (
        <Route
            {...rest}
            exact
            render={({ location }) =>
                session.isAuthenticated ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}