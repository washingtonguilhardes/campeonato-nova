import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UnauthneticatedRoutes, AuthenticatedRoutes } from './Routes';
import Redirection from './Routes/Redirection';
import { AuthenticationHandler } from "./Services/Authentication";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({});

const App: React.FC = () => {
    return (
        <AuthenticationHandler>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route path={'/'} exact >
                            <Redirection />
                        </Route>
                    </Switch>
                    <UnauthneticatedRoutes />
                    <AuthenticatedRoutes />
                </Router>
            </ThemeProvider>
        </AuthenticationHandler >
    );
}

export default App;
