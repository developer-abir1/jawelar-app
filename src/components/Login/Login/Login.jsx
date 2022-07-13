import React, { useState } from 'react';
import Layout from '../../layout/Layout';
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged } from "firebase/auth";
import initializeAuthenication from '../../../firebase.init';
import google from '../../../images/icon/s1AjSxph_400x400.jpg';

initializeAuthenication()
const Login = () => {
    const provider = new GoogleAuthProvider();
    const [users, setUsers] = useState({})
    const auth = getAuth()
    const handleGoogleSingIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                setUsers(user)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });



    }

    return (
        <Layout users={users} >

            <div className=" d-flex  justify-content-center">
                <button onClick={handleGoogleSingIn} className=" w-75 py-4 bg-white"><img src={google} width={50} alt="" srcset="" /> Continue with google</button>
            </div>
        </Layout>
    );
};

export default Login;