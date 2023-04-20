import { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Blog from './Components/Blog';
import Login from './Components/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const token = localStorage.getItem("token");
 console.log(token);
useEffect(()=>{
  if (token != null) {
       setLoggedIn(true);
  }
  
},[token])
console.log(loggedIn);

  return (
    <>
    <Navbar/>
     {loggedIn?<Blog/>: <Login/>}
      <AllRoutes/>
    <Footer/>
    </>
  );
}

export default App;
