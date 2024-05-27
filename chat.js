// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUnjPbGOSZPA0S-fa3QJk7Hdmm-KOrte0",
  authDomain: "web-app-vamos-conversar-ee47e.firebaseapp.com",
  databaseURL: "https://web-app-vamos-conversar-ee47e-default-rtdb.firebaseio.com",
  projectId: "web-app-vamos-conversar-ee47e",
  storageBucket: "web-app-vamos-conversar-ee47e.appspot.com",
  messagingSenderId: "1021981919010",
  appId: "1:1021981919010:web:e1ade7dd731e521efac77b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage
    

    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
localStorage.setItem ("user_name", user_name);
window.location(chat_room.html);
}



