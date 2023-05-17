import { useState } from 'react';
import SearchInput from './components/SearchInput';
import SelectedLanguage from './components/SelectedLanguage';
import {
  getSelectedLanguagesFromLocalStorage,
  setSelectedLanguagesToLocalStorage,
} from './utils/storage';

function App() {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(
    getSelectedLanguagesFromLocalStorage()
  );

  const handleSelect = (language: string) => {
    alert(language);
    setSelectedLanguages((prev) => {
      const filteredLanguages = [
        ...prev.filter((item) => item !== language),
        language,
      ];
      const newLanguages =
        filteredLanguages.length > 5
          ? filteredLanguages.slice(
              filteredLanguages.length - 5,
              filteredLanguages.length
            )
          : filteredLanguages;
      setSelectedLanguagesToLocalStorage(newLanguages);
      return newLanguages;
    });
  };

  return (
    <main className="App">
      <SelectedLanguage languages={selectedLanguages} />
      <SearchInput onSelect={handleSelect} />
    </main>
  );
}

export default App;
