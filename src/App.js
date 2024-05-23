import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './home';
import LandingPage from './landingPage.js'
import Signup from './components/signUp';
import Pricing from './pricing';
import About from './about'
import Blog from './blog';
// import { useEffect } from 'react';
// import {gapi} from 'gapi-script';

// const clientId = "1075143384397-g0i8lbh0v7t686iir6j9d49793k4rp57.apps.googleusercontent.com"


function App() {

  // useEffect(()=>{
  //   function start(){
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope:" "
  //     })
  //   };
  //   gapi.load("client:auth2", start)
  // });

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home/pricing" element={<Pricing/>}/>
        <Route path="/home/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
