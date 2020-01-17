import React, { useState } from 'react';
import { getApp } from "./App";


const StorageContext = React.createContext({});
interface StorageProps extends React.Props<any> {

}

const storageReducer = (state: any, action: any) => {
    return state;
};

export function StorageHandler(props: StorageProps) {
    const [storageState, setStorageState] = useState({});
    return (
        <React.Fragment>
            <StorageContext.Provider value={storageState}>
                {props.children}
            </StorageContext.Provider>
        </React.Fragment>
    )

}


export function useDatabase() {
    const app = getApp();
    
}