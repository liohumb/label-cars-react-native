import './logout.scss'

export default function Logout(  ) {
    localStorage.removeItem('user')

    return (
        <section className="logout">
            <div className="logout__container">
                <h1 className="logout__title">Vous vous êtes bien déconnecté.</h1>
            </div>
        </section>
    )
}