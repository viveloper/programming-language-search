function App() {
  return (
    <main className="App">
      <div className="SelectedLanguage">
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Elixir</li>
          <li>Java</li>
          <li>PHP</li>
        </ul>
      </div>
      <form className="SearchInput">
        <input
          className="SearchInput__input"
          type="text"
          placeholder="프로그램 언어를 입력하세요."
          value="Script"
        />
      </form>
      <div className="Suggestion">
        <ul>
          <li className="Suggestion__item--selected">
            Action<span className="Suggestion__item--matched">Script</span>
          </li>
          <li>
            Java<span className="Suggestion__item--matched">Script</span>
          </li>
          <li>
            Type<span className="Suggestion__item--matched">Script</span>
          </li>
          <li>
            Pure<span className="Suggestion__item--matched">Script</span>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
