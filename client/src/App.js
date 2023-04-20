import { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Blog from './Components/Blog';
// import Login from './Components/Login';
import { useNavigate } from 'react-router';

function App() {
  // const navigate = useNavigate()
  // const [loggedIn, setLoggedIn] = useState(false);
  // const token =localStorage.getItem("token");
  // console.log(token);
  // let data = token;
  // console.log(typeof(data));
// useEffect(()=>{
//   if (token !== null) {
//        setLoggedIn(true);
//   }else{
//     navigate("/login")
//   }
  
// },[token,navigate])
// console.log(loggedIn);

  return (
    <>
    <Navbar/>
      <AllRoutes/>
    <Footer/>
    </>
  );
}

export default App;
