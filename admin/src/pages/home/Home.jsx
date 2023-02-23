import Card from '../../components/card/Card'

import './home.scss'

export default function Home() {
    return (
        <section className="home">
            <div className="home__container">
                <Card image="https://images.pexels.com/photos/3221165/pexels-photo-3221165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      title="Ajouter" to="/ajouter-une-voiture"/>
                <Card image="https://images.pexels.com/photos/1729993/pexels-photo-1729993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      title="Voir" to="/voitures"/>
                <Card image="https://images.pexels.com/photos/10358845/pexels-photo-10358845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      title="Location" to="/"/>
                <Card image="https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      title="Utilisateur" to="/"/>
                <Card image="https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      title="Déconnexion" to="/deconnexion"/>
            </div>
        </section>
    )
}