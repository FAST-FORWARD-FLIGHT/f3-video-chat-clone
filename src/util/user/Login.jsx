import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auth } from "../../server/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { setCookie, getCookie, removeCookie } from "../../shared/Cookie";


const Login = () => {
  
const [userData, setUserData ] = useState();

const googleLoginHandler = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).then((data)=> {
    setUserData(data.user)
    console.log(data)
  })
}

  // --------___-------
  // const [authing, setAuthing] = useState(false);
  // const [isLogin, setIsLogin] = useState(false);
  // const isToken = getCookie("token");
  // const imgUrl = getCookie("userImg");

  // const signInWithGoogle = async () => {
  //   setAuthing(true);

  //   signInWithPopup(auth, new GoogleAuthProvider())
  //     .then(response => {
  //       console.log(response);
  //       console.log(response.user.uid);
  //       console.log(response.user.email);
  //       console.log(response.user.displayName);
  //       const token = response.user.uid;
  //       const userName = response.user.displayName;
  //       const email = response.user.email;
  //       const userImg = response.user.photoURL;
  //       setCookie("token", token);
  //       setCookie("userName", userName);
  //       setCookie("email", email);
  //       setCookie("userImg", userImg);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       setAuthing(false);
  //     });
  // };

  const onClickLogin = () => {
    googleLoginHandler();
    // setIsLogin(true);
  };
  const onClickLogout = () => {
    signOut(auth);
    removeCookie("token");
    removeCookie("email");
    removeCookie("userName");
    // setIsLogin(false);
  };
  // useEffect(() => {
  //   if (isToken !== undefined) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // }, [isToken]);
  return (
    <STLoginContainer>
      <STButtonLogin onClick={onClickLogin}>로그인</STButtonLogin>
      <STButton  onClick={onClickLogout}></STButton>
      {/* {isLogin === false ? (
      ) : (
      )} */}

      {/* <LoginButton /> */}
    </STLoginContainer>
  );
};
const STLoginContainer = styled.div`
margin-right: 20px;

`
const STButtonLogin = styled.div`
font-size: 20px;
font-style: bold;
cursor: pointer;
`;
const STButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.url});
  cursor: pointer;
`;

export default Login;
