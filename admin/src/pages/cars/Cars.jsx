import Table from '../../components/table/Table'

import './cars.scss'

export default function Cars(  ) {
    return (
        <section className="cars">
            <h1 className="cars__title">Les voitures</h1>
            <div className="cars__container">
                <Table/>
            </div>
        </section>
    )
}