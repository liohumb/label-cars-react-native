import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo-transparent.png'

import './header.scss'

export default function Header(  ) {
    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={logo} alt=""/>
            </Link>
            <nav className="header__nav">
                <Link to="/ajouter-une-voiture" className="header__nav-link">Ajouter</Link>
                <Link to="/voitures" className="header__nav-link">Voir</Link>
                <Link to="/" className="header__nav-link">Location</Link>
                <Link to="/" className="header__nav-link">Utilisateur</Link>
            </nav>
            <Link to="/ajouter-une-voiture" className="header__logout">Déconnexion</Link>
        </header>
    )
}