import Form from '../../components/form/Form'

import './create.scss'

export default function Create(  ) {
    return (
        <section className="create">
            <div className="create__container">
                <h1 className="create__container-title">Ajouter une nouvelle voiture au catalogue</h1>
                <Form edit={false}/>
            </div>
        </section>
    )
}