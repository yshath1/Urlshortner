import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from 'react';
import { Context } from './components/context/Context';

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/urls">
          {user?<Homepage />:<Login/>}
        </Route>
        <Route path="/register">
          {user ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Homepage /> : <Login />}</Route>
        
       
      </Switch>
    </Router>
  );
}

export default App;
