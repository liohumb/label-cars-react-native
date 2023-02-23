import { Link } from 'react-router-dom'

import './card.scss'

export default function Card( {to, image, title, subtitle} ) {
    return (
        <Link to={to} className="card">
            <img src={image} alt=" " className="card__background"/>
            <div className="card__container">
                <h1 className="card__container-title">{title}</h1>
            </div>
        </Link>
    )
}