import React, { useContext, useEffect } from "react";
import User from "../User";
import { getApp } from './../Firebase/App';

export const AuthContext = React.createContext<{ initializing: any, user: User | null, isAuthenticated: boolean }>({
    initializing: true,
    isAuthenticated: false,
    user: null
});

export function AuthenticationHandler(props: React.Props<any>) {

    const auth = useAuth();

    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    );
}

function parseUser(user: firebase.User | null) {
    return user ? new User(user) : null;
}

export const useAuth = () => {

    const [state, setState] = React.useState(() => {
        const user = getApp().auth().currentUser;
        return {
            initializing: !user,
            user: parseUser(user),
            isAuthenticated: Boolean(parseUser(user))
        }
    })
    async function onChange(user: firebase.User | null) {
        setState({ initializing: false, user: parseUser(user), isAuthenticated: Boolean(parseUser(user)) })
    }

    useEffect(() => {
        // listen for auth state changes
        const unsubscribe = getApp().auth().onAuthStateChanged(onChange);

        // unsubscribe to the listener when unmounting
        return () => unsubscribe();
    }, [])

    return state
}
export function useSession() {
    return useContext(AuthContext)

}