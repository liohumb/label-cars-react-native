import './card.scss'

export default function Card( {image, title, subtitle} ) {
    return (
        <div className="card">
            <img src={image} alt=" " className="card__background"/>
            <div className="card__container">
                <h1 className="card__container-title">{title}</h1>
                <span className="card__container-subtitle">{subtitle}</span>
            </div>
        </div>
    )
}