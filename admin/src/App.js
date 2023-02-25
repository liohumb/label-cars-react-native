import { Routes, Route, useLocation } from 'react-router-dom'

import Header from './navigations/header/Header'
import Footer from './navigations/footer/Footer'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Logout from './pages/logout/Logout'
import Create from './pages/create/Create'
import Edit from './pages/edit/Edit'
import Cars from './pages/cars/Cars'
import Car from './pages/car/Car'

import './assets/styles/styles.scss'

function App() {
    const location = useLocation()
    const homePage = location.pathname === '/'
    const registerPage = location.pathname === '/inscription'
    const loginPage = location.pathname === '/connexion'

    return (
        <>
            {!homePage && !registerPage && !loginPage && <Header/>}
            <Routes>
                <Route path="/voiture/:id" element={<Car/>}/>
                <Route path="/voitures" element={<Cars/>}/>
                <Route path="/modifier-une-voiture/:id" element={<Edit/>}/>
                <Route path="/ajouter-une-voiture" element={<Create/>}/>
                <Route path="/deconnexion" element={<Logout/>}/>
                <Route path="/connexion" element={<Login/>}/>
                <Route path="/inscription" element={<Register/>}/>
                <Route index path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
