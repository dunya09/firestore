import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik';
import*as Yup from 'yup';
import { Routes,Route,Link,BrowserRouter as Router } from 'react-router-dom';
import About from './contact/About';
import Home from './contact/Home';
import Contact from './contact/Contact';
function App() {
  return (
  <Router>
    {/* <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/home'>Home</Link> */}
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
       <Route path='/home' element={<Home/>}/> 
       <Route path='*' element={<h1>Not Found</h1>}/>

    </Routes>
  </Router>
    

  );
}

export default App;
