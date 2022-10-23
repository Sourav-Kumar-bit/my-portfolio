import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Loader from './Components/Loader';
import NavBar from './Components/Navbar/Navbar';
import Banner from './Components/Home/Banner';
import Banner1 from './Components/About/Banner1';
import Skills from './Components/Skills/Skills';
import Project from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
    <Loader load={loader} />
    <div className='App' id={loader ? "no-scroll" : "scroll"}>
      <NavBar />
      <Banner />
      <Banner1 />
      <Skills />
      <Project />
      <Contact />
      {/* <BrowserRouter>
      <Link to='/skills' />
        <Routes>
        <Route exact path='/' element={<Banner />} />
        <Route exact path='skills' element={<Skills />} />
            <Route exact path='connect' element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
      <Footer />
      {/* <Footer1 /> */}
    </div>
    </>
  )
}

export default App;
