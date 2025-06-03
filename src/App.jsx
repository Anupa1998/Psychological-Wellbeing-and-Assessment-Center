import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/HomePage/Home'
import SubNav from './components/nav/SubNav'
import Navbar from './components/nav/Navbar'
import AboutUs from './pages/HomePage/AboutUs'

function App() {
    return (
        <>
            <BrowserRouter>
                    <div>
                        <SubNav/>
                    </div>

                    <div>
                        <Navbar/>
                    </div>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/AboutUs' element={<AboutUs/>}/>
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
