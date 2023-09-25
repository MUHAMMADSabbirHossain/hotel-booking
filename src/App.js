// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import NavBar from './Components/NavBar/NavBar';
import Hotels from './Components/Hotels/Hotels';
import AllHotels from './Components/AllHotels/AllHotels';
import UserProfile from "./Components/UserProfile/UserProfile";
import RequireAuth from './Components/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      {/* navbar */}
      <NavBar></NavBar>
      app

      {/* react route */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/allhotels" element={<AllHotels></AllHotels>}></Route>

        <Route path="/userprofile" element={<RequireAuth><UserProfile></UserProfile></RequireAuth>}></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>


      {/* footer section */}
      <Footer></Footer>


    </div>
  );
}

export default App;
