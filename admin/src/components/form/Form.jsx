import './form.scss'

export default function Form() {
    return (
        <form className="form">
            <div className="form__contents">
                <div className="form__contents-content">
                    <label htmlFor="name">Le nom de la voiture</label>
                    <input type="text" name="name" id="name" placeholder="Entrez le marque et le modèle"/>
                </div>
                <div className="form__contents-content">
                    <label htmlFor="price">Prix de la location</label>
                    <input type="number" name="price" id="price" placeholder="Entrez le prix € par mois"/>
                </div>
            </div>
            <div className="form__content">
                <label htmlFor="image">Illustration de la voiture</label>
                <input type="text" name="image" id="image" placeholder="Entrez l'url de l'image"/>
            </div>
            <div className="form__contents">
                <div className="form__contents-content">
                    <label htmlFor="aircondition">Climatisation</label>
                    <select name="aircondition" id="aircondition">
                        <option value="true">oui</option>
                        <option value="false">non</option>
                    </select>
                </div>
                <div className="form__contents-content">
                    <label htmlFor="navigation">GPS intégré</label>
                    <select name="navigation" id="navigation">
                        <option value="true">oui</option>
                        <option value="false">non</option>
                    </select>
                </div>
                <div className="form__contents-content">
                    <label htmlFor="transmission">Transmission</label>
                    <select name="transmission" id="transmission">
                        <option value="AUTOMATIC">automatique</option>
                        <option value="MANUAL">manuelle</option>
                    </select>
                </div>
                <div className="form__contents-content">
                    <label htmlFor="person">Nombre de place</label>
                    <input type="number" name="person" id="person" placeholder="2, 4, 5 ?"/>
                </div>
            </div>
            <div className="form__content">
                <button type="submit">Ajouter</button>
            </div>
        </form>
    )
}