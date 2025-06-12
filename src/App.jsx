import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'aos/dist/aos.css';


import SubNav from './components/nav/SubNav'
import Navbar from './components/nav/Navbar'
import Error404 from './components/error/Error404'


import Home from './pages/HomePage/Home'
import AboutUs from './pages/AboutPage/AboutUs';
import Footer from './components/Footer/FooterNew';
import Servicse from './pages/Services/Servicse';
import Team from './pages/Team/Team';
import Resources from './pages/Resources/Resources';
import Faq from './pages/Faqs/Faq';
import Apointment from './pages/Apointment/Apointment';


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
                    <Route path='/services' element={<Servicse/>}/>
                    <Route path='/team' element={<Team/>}/>
                    <Route path='/resources' element={<Resources/>}/>
                    <Route path='/appointment' element={<Apointment/>}/>
                    <Route path='/faq' element={<Faq/>}/>

                </Routes>

                    <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App
