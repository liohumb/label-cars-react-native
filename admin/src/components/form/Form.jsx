import { useState } from 'react'
import './form.scss'

export default function Form() {
    const [car, setCar] = useState( {
        name: '',
        price: '',
        image: '',
        options: {
            aircondition: true,
            navigation: true,
            transmission: 'AUTOMATIC',
            person: ''
        }
    } )

    const handleChange = ( e ) => {
        const {name, value} = e.target

        setCar( ( prevState ) => ({
            ...prevState,
                [name]: value
        }))
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()

        fetch('http://localhost:5500/api/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        }).then(response => response.json()).then(data => console.log(data))
            .catch(error => console.error(error))
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__contents">
                <div className="form__contents-content">
                    <label htmlFor="name">Le nom de la voiture</label>
                    <input type="text" name="name" id="name"
                           placeholder="Entrez le marque et le modèle"
                           value={car.name} onChange={handleChange}/>
                </div>
                <div className="form__contents-content">
                    <label htmlFor="price">Prix de la location</label>
                    <input type="number" name="price" id="price"
                           placeholder="Entrez le prix € par mois"
                           value={car.price} onChange={handleChange}/>
                </div>
            </div>
            <div className="form__content">
                <label htmlFor="image">Illustration de la voiture</label>
                <input type="text" name="image" id="image"
                       placeholder="Entrez l'url de l'image"
                       value={car.image} onChange={handleChange}/>
            </div>
            <div className="form__contents">
                <div className="form__contents-content">
                    <label htmlFor="aircondition">Climatisation</label>
                    <select name="aircondition" id="aircondition"
                            value={car.aircondition} onChange={handleChange}>
                        <option value="true">oui</option>
                        <option value="false">non</option>
                    </select>
                </div>
                <div className="form__contents-content">
                    <label htmlFor="navigation">GPS intégré</label>
                    <select name="navigation" id="navigation"
                            value={car.navigation} onChange={handleChange}>
                        <option value="true">oui</option>
                        <option value="false">non</option>
                    </select>
                </div>
                <div className="form__contents-content">
                    <label htmlFor="transmission">Transmission</label>
                    <select name="transmission" id="transmission"
                            value={car.transmission} onChange={handleChange}>
                        <option value="AUTOMATIC">automatique</option>
                        <option value="MANUAL">manuelle</option>
                    </select>
                </div>
                <div className="form__contents-content">
                    <label htmlFor="person">Nombre de place</label>
                    <input type="number" name="person" id="person"
                           placeholder="2, 4, 5 ?" value={car.person} onChange={handleChange}/>
                </div>
            </div>
            <div className="form__content">
                <button type="submit">Ajouter</button>
            </div>
        </form>
    )
}