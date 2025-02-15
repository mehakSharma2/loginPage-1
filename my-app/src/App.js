import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  document.body.style.backgroundColor = "#FFFFF0";
  return (
    <Router>
   <div className='m-40 flex content-center justify-center'>
    <Routes>
       <Route path="/" element={<SignUp/>}></Route>
        <Route path="/login" element={ <Login/>}></Route>
        <Route path="/home" element={ <Home/>}></Route>
        
    </Routes>
   </div>
   </Router>
  );
}

export default App;
