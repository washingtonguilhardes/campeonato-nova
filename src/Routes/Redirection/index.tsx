import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../Services/Authentication';
export default function Redirection() {
    const session = useAuth();


    const history = useHistory();
    const location = useLocation<{ from?: any }>();



    useEffect(() => {
        console.log("redirect", session);
        const { from } = location.state || {}

        console.log({ from });

        if (!session.initializing && !session.isAuthenticated) {

            history.push({
                pathname: '/login'
            })


        } else if (!session.initializing && session.isAuthenticated) {

            history.push({
                pathname: '/dashboard',
                state: { showLoader: false }
            })

        }


    }, [history, location, session]);





    return (
        <div>
            aguarde...
        </div>
    )

}