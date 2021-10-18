import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/login";
import Navbar from "./Components/navbar/navbar";
import Users from "./Components/users/users";

function App() {
  return (
    <div className='App'>
      {/* <Login /> */}
      <Users />
    </div>
  );
}

export default App;
