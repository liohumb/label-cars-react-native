import { useEffect, useState } from 'react'
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
    const [user, setUser] = useState( false )
    const location = useLocation()
    const homePage = location.pathname === '/'
    const registerPage = location.pathname === '/inscription'
    const loginPage = location.pathname === '/connexion'
    const logoutPage = location.pathname === '/deconnexion'

    useEffect( (  ) => {
        if (localStorage.getItem('user')) return setUser(true)
    }, [])

    console.log(user)

    return (
        <>
            {!homePage && !registerPage && !loginPage && !logoutPage && <Header/>}
            <Routes>
                <Route path="/voiture/:id" element={user ? <Car/> : <Login/>}/>
                <Route path="/voitures" element={user ? <Cars/> : <Login/>}/>
                <Route path="/modifier-une-voiture/:id" element={user ? <Edit/> : <Login/>}/>
                <Route path="/ajouter-une-voiture" element={user ? <Create/> : <Login/>}/>
                <Route path="/deconnexion" element={user ? <Logout/> : <Login/>}/>
                <Route path="/connexion" element={user ? <Home/> : <Login/>}/>
                <Route path="/inscription" element={user ? <Home/> : <Register/>}/>
                <Route index path="/" element={user ? <Home/> : <Login/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
