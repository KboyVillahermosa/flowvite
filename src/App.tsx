
import { Component as Navbar } from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import About from './components/about/About';
import Header from './components/header/Header';


function App() {
  return (
   <>
   <body>
  <Router>
     <Navbar />
     <Header />
    <Routes>
      <Route path='/' element={< Home/>} />
      <Route path='/about' element={< About/>} />
    </Routes>
   </Router>
   </body>
   </>
  );
}

export default App;
