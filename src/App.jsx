import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'aos/dist/aos.css';


import SubNav from './components/nav/SubNav'
import Navbar from './components/nav/Navbar'
import Error404 from './components/error/Error404'
import Footer from './components/Footer/footer';

import Home from './pages/HomePage/Home'
import AboutUs from './pages/AboutPage/AboutUs';



function App() {
    return (
        <>
            <BrowserRouter>
                    <div>
                        <Navbar/>
                    </div>
                    <div>
                        <SubNav/>
                    </div>

                <Routes>
                    <Route path='*' element={<Error404/>}/>

                    <Route path='/' element={<Home/>}/>
                    <Route path='/aboutus' element={<AboutUs/>}/>
        
                </Routes>

                    <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App
