import './App.css';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import SetAuthToken from './Components/SetAuthToken';

function App() {
  const token = localStorage.getItem("token");
 if (token) {
     SetAuthToken(token);
 }
  return (
    <>
    <Navbar/>
      <AllRoutes/>
      <Footer/>
    </>
  );
}

export default App;
