import './App.css';
import Login from './pages/Login.jsx'
import UserList from "./pages/UserList";
import Home from './pages/Home.js'
import Rrhh from './pages/Rrhh.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate ///reemplazo a Redirect
  
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element={<Login />} />
        <Route exact path="/Rrhh" element ={<Rrhh />}></Route>
      </Routes>
    </Router>
      
     

  );
}

export default App;
//<Login />
 /*<UserList />*/