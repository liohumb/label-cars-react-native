import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './form.scss'

export default function Form({edit}) {
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
    const {id} = useParams()
    const navigate =useNavigate()

    useEffect( () => {
        if (edit) {
            fetch( `http://localhost:5500/api/cars/${id}` )
                .then( response => response.json() )
                .then( data => setCar( data ) )
                .catch( error => console.error( error ) )
        }
    }, [id, edit] )

    const handleChange = ( e ) => {
        const {name, value} = e.target

        if (name === "aircondition" || name === "navigation" || name === "transmission" || name === "person") {
            setCar( ( prevState ) => ({
                ...prevState,
                options: {
                    ...prevState.options,
                    [name]: value
                }
            }))
        } else {
            setCar( ( prevState ) => ({
                ...prevState,
                [name]: value
            }))
        }
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()

        if (edit) {
            fetch(`http://localhost:5500/api/cars/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(car)
            })
                .then(response => response.json()).then( () => navigate('/voitures'))
                .catch(error => console.error(error))
        } else {
            fetch('http://localhost:5500/api/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(car)
            }).then(response => response.json()).then( () => navigate('/voitures'))
                .catch(error => console.error(error))
        }

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
                            value={car.options.aircondition} onChange={handleChange}>
                        <option value={true}>oui</option>
                        <option value={false}>non</option>
                    </select>
                </div>
                <div className="form__contents-content">
                    <label htmlFor="navigation">GPS intégré</label>
                    <select name="navigation" id="navigation"
                            value={car.options.navigation} onChange={handleChange}>
                        <option value={true}>oui</option>
                        <option value={false}>non</option>
                    </select>
                </div>
                <div className="form__contents-content">
                    <label htmlFor="transmission">Transmission</label>
                    <select name="transmission" id="transmission"
                            value={car.options.transmission} onChange={handleChange}>
                        <option value="AUTOMATIC">automatique</option>
                        <option value="MANUAL">manuelle</option>
                    </select>
                </div>
                <div className="form__contents-content">
                    <label htmlFor="person">Nombre de place</label>
                    <input type="number" name="person" id="person"
                           placeholder="2, 4, 5 ?"
                           value={car.options.person} onChange={handleChange}/>
                </div>
            </div>
            <div className="form__content">
                <button type="submit">
                    {edit ? 'Modifier' : 'Ajouter'}
                </button>
            </div>
        </form>
    )
}