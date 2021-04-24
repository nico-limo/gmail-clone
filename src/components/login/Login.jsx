import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "../../fbConfig";
import { login } from "../../redux/reducers/userSlice";
//CSS
import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-3-1.png"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
