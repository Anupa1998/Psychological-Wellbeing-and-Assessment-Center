import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import AOS from 'aos';
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
import { useEffect } from 'react';
import AllWorkshop from './pages/Workshop/AllWorkshop';
import AllNewsEvent from './pages/NewsEvent/AllNewsEvent';
import SingleNewsEvent from './pages/NewsEvent/SingleNewsEvent';
import SingleWorkhop from './pages/Workshop/SingleWorkhop';
import ScrollToTop from './ScrollToTop';
import { useLocation } from 'react-router-dom';
import LoginNav from './components/nav/LoginNav';
import LoginSignup from './pages/Login&Register/LoginSignup';

function App() {
    const location = useLocation();

    useEffect(() => {
        AOS.init();
    }, []);

    const hideSubNavPath = ['/login'];
    const hideFooter = ['/login'];

    const shouldShowSubNav = !hideSubNavPath.includes(location.pathname);


    return (
        <>

            <ScrollToTop />

            {shouldShowSubNav &&
                <>
                    <Navbar />
                    <SubNav />
                </>
            }

            {/* <LoginNav/> */}

            <Routes>
                <Route path='*' element={<Error404 />} />
                <Route path='/' element={<Home />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/services' element={<Servicse />} />
                <Route path='/team' element={<Team />} />
                <Route path='/resources' element={<Resources />} />
                <Route path='/appointment' element={<Apointment />} />
                <Route path='/faq' element={<Faq />} />

                <Route path='/workshops' element={<AllWorkshop />} />
                <Route path='/workshops/:workshopid' element={<SingleWorkhop />} />

                <Route path='/newsevent' element={<AllNewsEvent />} />


                <Route path='/newsevent/:newsid' element={<SingleNewsEvent />} />

                <Route path='/login' element={<LoginSignup/>} />

            </Routes>


            {
                shouldShowSubNav &&
                <Footer />
            }

        </>
    )
}

export default App