import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './auth.scss'

export default function Secret(  ) {
    const [secret, setSecret] = useState( '' )
    const [help, setHelp] = useState( false )
    const [hover, setHover] = useState( false )
    const navigate = useNavigate()
    const handleSubmit = ( e ) => {
        e.preventDefault()

        if (secret === 'fred4ever') {
            localStorage.setItem('secret', 'true')
            navigate('/inscription')
        } else {
            setHelp(true)
        }
    }

    return (
        <section className={`auth ${hover && 'auth__secret'}`}>
            <div className="auth__container">
                <form className="auth__form" onSubmit={handleSubmit}>
                    <div className="auth__form-content">
                        <label htmlFor="secret">Quel est le mot de passe secret ?</label>
                        <input type="text" name="secret" id="secret"
                               value={secret} onChange={( e ) => setSecret(e.target.value)}/>
                        {help &&
                            <span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Passez votre souris ici pour avoir un indice</span>
                        }
                    </div>
                    <div className="auth__form-content">
                        <button type="submit">Valider</button>
                    </div>
                </form>
            </div>
        </section>
    )
}