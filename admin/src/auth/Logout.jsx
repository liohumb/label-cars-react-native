import './auth.scss'

export default function Logout(  ) {
    localStorage.removeItem('user')

    return (
        <section className="auth">
            <div className="auth__container">
                <h1 className="auth__title">Vous vous êtes bien déconnecté.</h1>
            </div>
        </section>
    )
}