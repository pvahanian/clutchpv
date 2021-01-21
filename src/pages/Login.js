import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import firebase from "firebase/app";
import fireApp from '../base'
// import axios from "axios";

const defaultValues = {
    email: "",
    password: ""
  };

function Login() {
    // const history = useHistory()
    const [values, setValues] = useState(defaultValues);

    const onChange = (evt) => {
        const { name, value } = evt.target;
        setValues({ ...values, [name]: value });
    };

    const submitLogin = async (evt) => {
        evt.preventDefault();
        try {
        await fireApp
            .auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(
                async (res) =>{
                const token = await firebase.auth()?.currentUser?.getIdToken(true);
                window.localStorage.setItem("token", token)
                console.log("success", token)
            })
            .catch (error => {
                console.log(error);
            })
        firebase.auth().onAuthStateChanged(async function(user) {
                if (user) {
                  console.log(user)
                  await firebase.auth().signOut()
                  console.log(user)
                }
                console.log("buddy is a jazz fan")
        });
        }    
        catch (error) {
          console.log(error);
        }
    }




      
    return (
        <div>
            <form onSubmit={submitLogin}>
                <input name="email" type="email" onChange={onChange} value={values.email} />
                <input name="password" type="password" onChange={onChange} value={values.password} />
                <button>Login</button>
                <button>Delete</button>
            </form>
        </div>
    )
}


export default Login;

// import React, {useEffect, useState} from "react"
// import fireApp from "../base"

// export const AuthContext = React.createContext()

// export const AuthProvider = ({children}) => {
//     const [currentUser, setCurrentUser] =useState(null)
//     const [pending, setPending] = useState(true)

//     useEffect( () => {
//         fireApp.auth().onAuthStateChanged((user) => {
//             setCurrentUser(user)
//             setPending(false)
//         });
//     },[])

//     if(pending){return <>Loading...</>}

//     return(
//         <AuthContext.Provider
//         value={{currentUser}}> 
//         {children}
//         </AuthContext.Provider>
//     )

// }



/////////////////////////

// import React, { useState } from "react";
// import * as yup from "yup";
// import schema from "../utils/schema.js";
// import {useHistory} from 'react-router-dom'





//   const signInWithGithub = (e) => {
//     e.preventDefault()
//     const provider = new firebase.auth.GithubAuthProvider();
//     provider.setCustomParameters({
//       "redirect_uri": `${document.URL}/chatroom` // Document.url grabs whatever the url/domain we're at
//     })
  
//     firebase.auth().signInWithPopup(provider)
//     .then(res => {
//       // const token = res.credential.accessToken //GitHub API token
//       // const user = res.user // signed-in user info
//       setTimeout(() => { history.push("/chatroom"); }, 1300) // Push user to chat room if they use git hub after 1.3 seconds
//     })
//     .catch(error => {
//       // const errorCode = error.code
//       // const errorMessage = error.message
//     })

//   }
    





