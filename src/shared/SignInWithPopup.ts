import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
  } from "firebase/auth";
  import { setCookie } from "./Cookie";

 const signInWithGoogle = async () => {
    const auth = getAuth();
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(response => {
        const token = response.user.uid;
        const userName = response.user.displayName;
        const email = response.user.email;
        const userImg = response.user.photoURL;
        setCookie("token", token);
        setCookie("userName", userName);
        setCookie("email", email);
        setCookie("userImg", userImg);
      })
      .catch(error => {
        console.log(error);
      });
  };

  export default signInWithGoogle