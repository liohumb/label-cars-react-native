import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './auth.scss'

export default function Register() {
    const [username, setUsername] = useState( '' )
    const [password, setPassword] = useState( '' )
    const navigate = useNavigate()

    const handleSubmit = ( e ) => {
        e.preventDefault()

        fetch( 'http://localhost:5500/api/auth/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        } ).then( response => response.json() ).then( () => navigate( '/connexion' ) )
            .catch( error => console.error( error ) )
    }
    return (
        <section className="auth">
            <div className="auth__container">
                <form className="auth__form" onSubmit={handleSubmit}>
                    <h1 className="auth__form-title">Enregistrez-vous</h1>
                    <div className="auth__form-content">
                        <label htmlFor="username">Votre nom d'utilisateur</label>
                        <input type="text" name="username" id="username"
                               placeholder="Choisissez votre nom d'utilisateur"
                               value={username} onChange={( e ) => setUsername(e.target.value)}/>
                    </div>
                    <div className="auth__form-content">
                        <label htmlFor="password">Votre mot de passe</label>
                        <input type="password" name="password" id="password"
                               placeholder="Choisissez votre mot de passe"
                               value={password} onChange={( e ) => setPassword(e.target.value)}/>
                    </div>
                    <div className="auth__form-content">
                        <button type="submit">S'enregistrer</button>
                    </div>
                </form>
                <Link to="/connexion" className="auth__container-text">C'est n'est pas votre première fois ?</Link>
            </div>
        </section>
    )
}