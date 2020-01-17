import app from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "./Login";
const firebaseConfig = {
    apiKey: "AIzaSyAAVtoMtCGuKvYgJytPTyxIkcQMfUQcT40",
    authDomain: "campeonato-nova.firebaseapp.com",
    databaseURL: "https://campeonato-nova.firebaseio.com",
    projectId: "campeonato-nova",
    storageBucket: "campeonato-nova.appspot.com",
    messagingSenderId: "137912483938",
    appId: "1:137912483938:web:5e54554236bbbb0cabd13b",
    measurementId: "G-9MTBDGSD2X"
};
app.initializeApp(firebaseConfig);
export function getApp() {
    //@ts-ignore
    window.app = app;
    return app;
}