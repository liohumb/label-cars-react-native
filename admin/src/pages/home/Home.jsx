import Card from '../../components/card/Card'

import './home.scss'

export default function Home() {
    return (
        <section className="home">
            <div className="home__container">
                <Card image="https://images.pexels.com/photos/3221165/pexels-photo-3221165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      title="Ajouter" subtitle="cliquez ici pour ajouter un nouveau véhicule au catalogue"
                      to="/ajouter-une-voiture"/>
                <Card image="https://images.pexels.com/photos/1729993/pexels-photo-1729993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      title="Voir" subtitle="cliquez ici pour voir et modifier un véhicule"
                      to="/voitures"/>
                <Card image="https://images.pexels.com/photos/10358845/pexels-photo-10358845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      title="Location" subtitle="cliquez ici pour voir les locations en cours"
                      to="/"/>
                <Card image="https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      title="Utilisateur" subtitle="cliquez ici pour voir les clients"
                      to="/"/>
                <Card image="https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      title="Déconnexion" subtitle="à bientôt !" to="/deconnexion"/>
            </div>
        </section>
    )
}