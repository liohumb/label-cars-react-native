import './edit.scss'
import Form from '../../components/form/Form'

export default function Edit() {
    return (
        <section className="edit">
            <div className="edit__container">
                <h1 className="edit__container-title">Modifier les informations du véhicules</h1>
                <Form edit/>
            </div>
        </section>
    )
}