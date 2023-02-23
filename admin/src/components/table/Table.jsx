import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './table.scss'

export default function Table() {
    const [cars, setCars] = useState( [] )
    const navigate = useNavigate()

    useEffect( () => {
        fetch('http://localhost:5500/api/cars')
            .then(response => response.json())
            .then(cars => setCars(cars))
            .catch(error => console.error(error))
    }, [])

    const handleDelete = (id, name) => {
        const confirmation = window.confirm(`Êtes vous sûr de bien vouloir supprimer la voiture ${name}?`)

        if (confirmation) {
            fetch(`http://localhost:5500/api/cars/${id}`, {
                method: 'DELETE'
            }).then(response => response.json())
                .then( (  ) => window.location.reload())
                .catch(error => console.error(error))
        }
    }

    return (
        <ul className="table">
            <li className="table__header">
                <div className="table__col table__col-name">Nom</div>
                <div className="table__col table__col-price">Prix</div>
                <div className="table__col table__col-reservation">Réservation</div>
                <div className="table__col table__col-options"><i className="bx bxs-cog"/></div>
            </li>
            {cars.map( ( car ) => (
                <li className="table__row" key={car._id}>
                    <Link to={`/voiture/${car._id}`}
                          className="table__col table__col-name"
                          data-label="Nom">{car.name}</Link>
                    <Link to={`/voiture/${car._id}`}
                          className="table__col table__col-price"
                          data-label="Prix">{car.price} € / mois</Link>
                    <Link to={`/voiture/${car._id}`}
                          className="table__col table__col-reservation"
                          data-label="Réservation">{car.reservations}</Link>
                    <div className="table__col table__col-options">
                        <Link to={`/modifier-une-voiture/${car._id}`} className="bx bxs-edit table__col-edit"/>
                        <span> | </span>
                        <i className="bx bxs-trash table__col-delete" onClick={() => handleDelete(car._id, car.name)}></i>
                    </div>
                </li>
            ) )}
        </ul>
    )
}