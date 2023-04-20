import { Route, Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import HomePage from './HomePage';
import Blog from './Blog';
// import RouteGuard from './RouteGuard';
// import HomePage from './HomePage';
// import { history } from './history';

const AllRoutes = () => {
  return (
    <> 
      <Routes >
      <Route path="/" element={<HomePage/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} /> 
     </Routes>
    </>
  )
}

export default AllRoutes

// mport { BrowserRouter, Route, Redirect } from 'react-router-dom';

// function App() {
//   return (
//     <BrowserRouter>
//       <Route exact path="/">
//         {loggedIn ? <Redirect to="/home" /> : <LoginPage />}
//       </Route>
//       <Route path="/home">
//         <HomePage />
//       </Route>
//     </BrowserRouter>
//   );
// }