import { getApp } from "./App"
import User from "../User";

export default class Login {
    static getProvider() {
        const app = getApp();
        const provider = new app.auth.GoogleAuthProvider();
        return provider;
    }

    static async goToAuth(): Promise<User | null> {
        const app = getApp();

        const result = await app.auth().signInWithPopup(Login.getProvider());
        if (!result) {
            return null;
        }
        if (!result.additionalUserInfo) {
            return null;
        }
        if (!result.user) {
            return null;
        }
        return new User(result.user);
    }

    static async onAuthStateChange(callback: (user?: User) => any) {
        getApp()
            .auth()
            .onAuthStateChanged(user => {
                if (user) {
                    return callback(new User(user));
                }
                return callback();

            });
    }

}
//@ts-ignore
window.Login = Login;

