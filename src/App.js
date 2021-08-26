import React, { useState } from "react";
import LoginPage from "./components/login-page/LoginPage.jsx";
import Home from "./components/home/Home";
import data from "./data/data";
import loginImg from "./img/login-main.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import PostCard from './components/post_card/PostCard';


function App() {
  const userYurActName = "Name";
  const userYurActPass = "password";

  const [login, setlogin] = useState(false);

  const onLogin = (Name, Pass) => {
    if (Name === userYurActName) {
      if (Pass === userYurActPass) {
        setlogin(!login);
      }
    } else {
      alert("The creds you entered are wrong ");
    }
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {login ? <Redirect to="/feed" /> : <LoginPage login={login} onLogin={onLogin} loginImg={loginImg} />}
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
