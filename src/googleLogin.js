import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; // Assuming you're using Firebase for backend authentication (optional)

const clientId = '810966536385-grcd1iibgsrd1nsks195sqgkmhjphsl3.apps.googleusercontent.com';

const handleGoogleLogin = async (response) => {
  const credential = GoogleAuthProvider.credential(
    response?.credential
  );

  // Handle login logic with Firebase or your backend (replace with your implementation)
  // Assuming you're using Firebase:
  const auth = getAuth();
  const userCredential = await signInWithPopup(auth, credential);

  // Access user information
  const user = userCredential.user;
  console.log(`Logged in user:`, user); // Example usage
};

const GoogleLoginComponent = () => {
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={handleGoogleLogin}
      onError={(err) => console.error('Login Error:', err)}
    />
  );
};

export default GoogleLoginComponent;


// import { GoogleLogin } from "@react-oauth/google";

// const clientId = "1075143384397-g0i8lbh0v7t686iir6j9d49793k4rp57.apps.googleusercontent.com"

// function Login(){
//     const onSuccess= (res) =>{
//         console.log("Login success, current user: ",res.profileObj);
//     }

//     const onFailure=(res)=>{
//         console.log("Login Failed! res: ", res)
//     }
//     return(
//         <div id="signInButton">
//             <GoogleLogin
//                 clientId = {clientId}
//                 buttonText = "Login"
//                 onSuccess = {onSuccess}
//                 onFailure = {onFailure}
//                 cookie_policy = {"single_host_origin"}
//                 isSignedIn = {true}
//             />
//             </div>
//     )
// }

// export default Login;