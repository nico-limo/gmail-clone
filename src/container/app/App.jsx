import React, { useEffect } from "react";
//CSS
import "./App.css";
//Components
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Mail from "../mail/Mail";
import EmailList from "../emailList/EmailList";
//React Router dom
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SendMail from "../../components/sendMail/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "../../redux/reducers/mailSlice";
import { login, selectUser } from "../../redux/reducers/userSlice";
import Login from "../../components/login/Login";
import { auth } from "../../fbConfig";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }))
      } else {

      }
    })
  }, [])
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
