import "./App.css";
import React,{Fragment} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Navigate,
  Route
} from 'react-router-dom';
import PrivateRoute from "./components/router/PrivateRoute";
import Login from "./components/pageComponent/Login";
import HomePage  from './components/pageComponent/HomePage';
function App() {
  return (
    <Router>
    <ul> 
     <li> 
       <Link to="/components/pageComponent/HomePage">HomePage</Link>
     </li>
    </ul>
    

     <Routes> 
      <Route  path="/" element={ <Login />} /> 
      <Route   path="/components/pageComponent/HomePage" element={ <HomePage />}  />
      </Routes> 
    </Router>
  );
}

export default App;
