
const Form = () => (
<form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <p>
                    <label>
                        <span className="form__labelText">
                            Kwota w zł*:
                        </span>
                        <input className="form__field" required type="number" name="kwota" step="0.01" min="1"
                            max="1000000000"/>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Wynik:
                        </span>
                        <input className="form__field" readonly type="number" name="wynik" step="0.01" min="1"
                            max="1000000000"/>
                    </label>
                </p>
                <p className="form__paragraph">
                    * - pole obowiązkowe
                </p>
                <label>
                    <select className="form__option">
                        <option value="EUR">Euro</option>
                        <option value="GBP">Funt brytyjski</option>
                        <option value="USD">Dolar amerykański</option>
                    </select>
                </label>
                <button className="form__button">Przelicz walutę</button>
            </fieldset>
        </form>
);

export default Form;