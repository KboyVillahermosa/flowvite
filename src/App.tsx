
import { Component as Navbar } from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import About from './components/about/About';
import Header from './components/header/Header';
import Contact from './components/contact/Contact'


function App() {
  return (
   <>
   <body>
  <Router>
     <Navbar />
    <Routes>
      <Route path='/' element={<>
      <Header />
      < Home/>
       </>} />
      <Route path='/about' element={< About/>} />
      <Route path='/contact' element={< Contact/>} />
    </Routes>
   </Router>
   </body>
   </>
  );
}

export default App;
