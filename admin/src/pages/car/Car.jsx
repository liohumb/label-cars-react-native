import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import './car.scss'

export default function Car() {
    const [car, setCar] = useState( null )
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect( () => {
        fetch( `http://localhost:5500/api/cars/${id}` )
            .then( response => response.json() )
            .then( data => setCar( data ) )
            .catch( error => console.error( error ) )
    }, [id] )

    const handleDelete = (name) => {
        const confirmation = window.confirm(`Êtes vous sûr de bien vouloir supprimer la voiture ${name}?`)

        if (confirmation) {
            fetch(`http://localhost:5500/api/cars/${id}`, {
                method: 'DELETE'
            }).then(response => response.json())
                .then( (  ) => navigate('/voitures'))
                .catch(error => console.error(error))
        }
    }

    if (!car) {
        return (
            <section className="car">
                <h1 className="car__title">Chargement de la voiture...</h1>
            </section>
        )
    }

    return (
        <section className="car">
            <div className="car__container">
                <div className="car__image">
                    <img src={car.image} alt={car.name} className="car__image-img"/>
                </div>
                <div className="car__infos">
                    <h1 className="car__infos-title">{car.name}</h1>
                    <span className="car__infos-subtitle">{car.price} € / mois</span>
                    <span className="car__infos-reservation">
                        {car.reservations > 0 ?
                            `La voiture a été réservée ${car.reservations} fois`
                            :
                            'La voiture n\'a pas encore été réservée'
                        }
                    </span>
                    <p className="car__infos-descriptions">
                        Cette voiture a une
                        transmission {car.options.transmission === 'AUTOMATIC' ? 'automatique' : 'manuelle'}, elle peut
                        accueillir {car.options.person} personnes,
                        elle {car.options.aircondition ? 'est' : 'n\'est pas'} équipé de la climatisation et
                        elle {car.options.navigation ? 'a un' : 'n\'a pas de'} gps intégré.
                    </p>
                </div>
                <div className="car__options">
                    <Link to={`/modifier-une-voiture/${car._id}`} className="car__options-edit">Modifier</Link>
                    <span className="car__options-delete" onClick={(  ) => handleDelete(car.name)}>Supprimer</span>
                </div>
            </div>
        </section>
    )
}