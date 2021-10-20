import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import Login from "./Components/Login/login";
import Navbar from "./Components/navbar/navbar";
import Users from "./Components/users/users";
import ListUSer from "./Components/users/tempAPIFetch.jsx";
import FetchAPIdata from "./Components/users/fetchAPIdata";
import MyModal from "./Components/modal/modal";
import ModalButton from "./Components/modal/modalButton";
import UserProfile from "./Components/userProfile/userProfile";

function App() {
  return (
    <div className='App'>
      {/* <Login /> */}
      {/* <Users /> */}
      {/* <ListUSer /> */}
      {/* <FetchAPIdata /> */}
      {/* <ListUSer /> */}
      {/* <MyModal /> */}
      <ModalButton />
      <UserProfile />
    </div>
  );
}

export default App;
