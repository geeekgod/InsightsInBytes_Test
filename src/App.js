import React, { useState } from "react";
import LoginPage from "./components/login-page/LoginPage.jsx";
import Home from "./components/home/Home";
import data from "./data/data";
import loginImg from "./img/login-main.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import PostCard from './components/post_card/PostCard';
import Topbar from './components/topbar/TopBar';


function App() {
  const userYurActName = "Name";
  const userYurActPass = "password";

  const [login, setlogin] = useState(false);

  const onLogin = () => {
    const userXuzName = document.getElementById("name").value;
    const userXuzPassword = document.getElementById("password").value;

    checkUser(userXuzName, userXuzPassword);
  };

  const checkUser = (Name, Pass) => {
    if (Name === userYurActName) {
      if (Pass === userYurActPass) {
        console.log(login);
        setlogin(!login);
        console.log(login);
      }
    } else {
      alert("The creds entered are wrong ");
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage login={login} onLogin={onLogin} loginImg={loginImg} />
        </Route>
        <Route path="/feed/post/:slug">
          <PostCard />
        </Route>
        <Route path="/feed">
          <Home data={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
