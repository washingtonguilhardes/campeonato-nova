import { useEffect, useState } from 'react';
import { UserData } from '.';
import { getApp } from '../Firebase/App';
import { useSession } from './../Authentication';
export function useUserData() {
    const { user } = useSession();
    const [userData, setUserData] = useState<UserData>({ stars: 0 });


    async function loadUser(result: firebase.database.DataSnapshot) {
        setUserData(result.val() || { stars: 0 });
    }


    useEffect(() => {
        if (user) {
            const userDataRef = getApp().database().ref(`/users/${user.getUID()}/userData`);
            userDataRef.on('value', loadUser);
            return () => getApp().database().ref(`/users/${user.getUID()}/userData`).off();
        }
    }, [user]);

    return userData;

}