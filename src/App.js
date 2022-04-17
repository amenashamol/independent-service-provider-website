
import './App.css';
import Header from './Pages/About/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SignIn from './Pages/Login/Sing In/SignIn';
import Services from './Pages/Services/Services';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
