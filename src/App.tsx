import SearchInput from './components/SearchInput';
import SelectedLanguage from './components/SelectedLanguage';
import Suggestion from './components/Suggestion';

function App() {
  return (
    <main className="App">
      <SelectedLanguage />
      <SearchInput />
      <Suggestion />
    </main>
  );
}

export default App;
