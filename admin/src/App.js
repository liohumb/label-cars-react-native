import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Header from './navigations/header/Header'
import Footer from './navigations/footer/Footer'
import Home from './pages/home/Home'
import Secret from './auth/Secret'
import Register from './auth/Register'
import Login from './auth/Login'
import Logout from './auth/Logout'
import Create from './pages/create/Create'
import Edit from './pages/edit/Edit'
import Cars from './pages/cars/Cars'
import Car from './pages/car/Car'

import './assets/styles/styles.scss'

function App() {
    const [user, setUser] = useState( false )
    const [secret, setSecret] = useState( false )
    const location = useLocation()
    const homePage = location.pathname === '/'
    const secretPage = location.pathname === '/secret'
    const registerPage = location.pathname === '/inscription'
    const loginPage = location.pathname === '/connexion'
    const logoutPage = location.pathname === '/deconnexion'

    useEffect( (  ) => {
        if (localStorage.getItem('user')) return setUser(true)
    }, [])

    useEffect( () => {
        if (localStorage.getItem('secret')) return setSecret(true)
    }, [])

    const pageSecret = () => {
        if (user && secret) {
            return <Home/>
        } else if (!user && secret) {
            return <Register/>
        } else if (!user && !secret) {
            return <Secret/>
        }
    }

    return (
        <>
            {!homePage && !secretPage && !registerPage && !loginPage && !logoutPage && <Header/>}
            <Routes>
                <Route path="/voiture/:id" element={user ? <Car/> : <Login/>}/>
                <Route path="/voitures" element={user ? <Cars/> : <Login/>}/>
                <Route path="/modifier-une-voiture/:id" element={user ? <Edit/> : <Login/>}/>
                <Route path="/ajouter-une-voiture" element={user ? <Create/> : <Login/>}/>
                <Route path="/deconnexion" element={user ? <Logout/> : <Login/>}/>
                <Route path="/connexion" element={user ? <Home/> : <Login/>}/>
                <Route path="/inscription" element={user ? <Home/> : <Register/>}/>
                <Route path="/secret" element={pageSecret()}/>
                <Route index path="/" element={user ? <Home/> : <Login/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
