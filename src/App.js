import React from 'react';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup'
import Booked from './component/Cards/Popup';
import Registered from './component/Cards/Registered';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/registered' element={<Registered/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;