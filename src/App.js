

function App() {
  return (
    <div className="App">
    <div class="body__container">
        <form class="form">
            <fieldset class="form__fieldset">
                <legend class="form__legend">Kalkulator walut</legend>
                <p>
                    <label>
                        <span class="form__labelText">
                            Kwota w zł*:
                        </span>
                        <input class="form__field" required type="number" name="kwota" step="0.01" min="1"
                            max="1000000000"/>
                    </label>
                </p>
                <p>
                    <label>
                        <span class="form__labelText">
                            Wynik:
                        </span>
                        <input class="form__field" readonly type="number" name="wynik" step="0.01" min="1"
                            max="1000000000"/>
                    </label>
                </p>
                <p class="form__paragraph">
                    * - pole obowiązkowe
                </p>
                <label>
                    <select class="form__option">
                        <option value="EUR">Euro</option>
                        <option value="GBP">Funt brytyjski</option>
                        <option value="USD">Dolar amerykański</option>
                    </select>
                </label>
                <button class="form__button">Przelicz walutę</button>
            </fieldset>
        </form>
    </div>
    </div>
  );
}

export default App;
