import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';
import { Link } from 'react-router-dom';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
// Redux stuff
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

const styles = (theme) => ({
  ...theme.spreadThis
});

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault(); // prevent username and password being displayed
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  };
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const {
      classes,
      UI: { loading }
    } = this.props;
    const { errors } = this.state;

    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={AppIcon} alt="monkey" className={classes.image} />
          <Typography variant="h2" className={classes.pageTitle}>
            Login
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              Login
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <br />
            <small>
              don't have an account ? sign up <Link to="/signup">here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(login));


// import React, { useState } from "react";
// import { useHistory } from 'react-router-dom'
// import firebase from "firebase/app";
// import fireApp from '../base'
// // import axios from "axios";

// const defaultValues = {
//     email: "",
//     password: ""
//   };

// function Login() {
//     // const history = useHistory()
//     const [values, setValues] = useState(defaultValues);

//     const onChange = (evt) => {
//         const { name, value } = evt.target;
//         setValues({ ...values, [name]: value });
//     };

//     const submitLogin = async (evt) => {
//         evt.preventDefault();
//         try {
//         await fireApp
//             .auth()
//             .signInWithEmailAndPassword(values.email, values.password)
//             .then(
//                 async (res) =>{
//                 const token = await firebase.auth()?.currentUser?.getIdToken(true);
//                 window.localStorage.setItem("token", token)
//                 console.log("success", token)
//             })
//             .catch (error => {
//                 console.log(error);
//             })
//         firebase.auth().onAuthStateChanged(async function(user) {
//                 if (user) {
//                   console.log(user)
//                   await firebase.auth().signOut()
//                   console.log(user)
//                 }
//                 console.log("buddy is a jazz fan")
//         });
//         }    
//         catch (error) {
//           console.log(error);
//         }
//     }




      
//     return (
//         <div>
//             <form onSubmit={submitLogin}>
//                 <input name="email" type="email" onChange={onChange} value={values.email} />
//                 <input name="password" type="password" onChange={onChange} value={values.password} />
//                 <button>Login</button>
//                 <button>Delete</button>
//             </form>
//         </div>
//     )
// }


// export default Login;

// // import React, {useEffect, useState} from "react"
// // import fireApp from "../base"

// // export const AuthContext = React.createContext()

// // export const AuthProvider = ({children}) => {
// //     const [currentUser, setCurrentUser] =useState(null)
// //     const [pending, setPending] = useState(true)

// //     useEffect( () => {
// //         fireApp.auth().onAuthStateChanged((user) => {
// //             setCurrentUser(user)
// //             setPending(false)
// //         });
// //     },[])

// //     if(pending){return <>Loading...</>}

// //     return(
// //         <AuthContext.Provider
// //         value={{currentUser}}> 
// //         {children}
// //         </AuthContext.Provider>
// //     )

// // }



// /////////////////////////

// // import React, { useState } from "react";
// // import * as yup from "yup";
// // import schema from "../utils/schema.js";
// // import {useHistory} from 'react-router-dom'





// //   const signInWithGithub = (e) => {
// //     e.preventDefault()
// //     const provider = new firebase.auth.GithubAuthProvider();
// //     provider.setCustomParameters({
// //       "redirect_uri": `${document.URL}/chatroom` // Document.url grabs whatever the url/domain we're at
// //     })
  
// //     firebase.auth().signInWithPopup(provider)
// //     .then(res => {
// //       // const token = res.credential.accessToken //GitHub API token
// //       // const user = res.user // signed-in user info
// //       setTimeout(() => { history.push("/chatroom"); }, 1300) // Push user to chat room if they use git hub after 1.3 seconds
// //     })
// //     .catch(error => {
// //       // const errorCode = error.code
// //       // const errorMessage = error.message
// //     })

// //   }
    





