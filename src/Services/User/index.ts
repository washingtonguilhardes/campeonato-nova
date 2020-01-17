import { getApp } from './../Firebase/App';
// firebase.auth.
interface Profile extends Object {
    granted_scopes: string;
    id: string;
    verified_email: boolean;
    given_name: string;
    locale: string;
    family_name: string;
    email: string;
    picture: string;
}
export interface UserData {
    stars: number;
}
export default class User {

    uid: string;
    name: string;
    email: string;
    lastName: string;
    thumb: string;

    constructor(fUser: firebase.User) {
        this.uid = fUser.uid;
        this.name = fUser.displayName?.split(" ")[0] || "";
        this.lastName = fUser.displayName?.split(" ").slice(1).join(" ") || "";
        this.email = fUser.email || "";
        this.thumb = fUser.photoURL || "";
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    getThumb(): string {
        return this.thumb;
    }
    getUID() {
        return this.uid;
    }

    static getStorage(uid: string, path = ''): firebase.database.Reference {
        return getApp().database().ref("users/" + uid + path);
    }

    static async addUserStar(user: User, userData: UserData) {
        debugger;
        const userDataRef = this.getStorage(user.getUID(), '/userData');
        userDataRef.set({
            stars: userData.stars + 1
        });
    }
}