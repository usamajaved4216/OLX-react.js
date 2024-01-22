import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAnC3PQzOC--fDG0DRDUihKkk3on8cGN_4",
    authDomain: "practice-9baa8.firebaseapp.com",
    projectId: "practice-9baa8",
    storageBucket: "practice-9baa8.appspot.com",
    messagingSenderId: "393488946747",
    appId: "1:393488946747:web:47d7adffa416c243da6e1e"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Register(userInfo) {
    const { fullname, age, email, password } = userInfo


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Register Successfully')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
}

function Login(userInfo) {
    const {email, password } = userInfo


    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Login Successfully')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
}

export {
    Register,
    Login
};
