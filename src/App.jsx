import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'aos/dist/aos.css';

import Home from './pages/HomePage/Home'
import SubNav from './components/nav/SubNav'
import Navbar from './components/nav/Navbar'
import AboutUs from './pages/HomePage/AboutUs'
import Error404 from './components/error/Error404'
import Footer from './components/Footer/footer';

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
                    <Route path='/AboutUs' element={<AboutUs/>}/>
                    
                </Routes>

                    <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App
