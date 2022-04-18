
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SignIn from './Pages/Login/Sing In/SignIn';
import Services from './Pages/Services/Services';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/Shared/About/About';
import NotFound from './Pages/About/Shared/NotFound/NotFound';
import Header from './Pages/About/Shared/Header/Header';
import SignUp from './Pages/Login/SignUp/SignUp';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import CheackOut from './Pages/Checackout/CheackOut';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/cheackout' element={
          <RequireAuth>
            <CheackOut></CheackOut>
          </RequireAuth>
        }></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
