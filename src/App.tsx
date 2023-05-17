import { useMemo, useRef, useState } from 'react';
import debounce from 'debounce';
import SearchInput from './components/SearchInput';
import SelectedLanguage from './components/SelectedLanguage';
import {
  getSelectedLanguagesFromLocalStorage,
  setSelectedLanguagesToLocalStorage,
} from './utils/storage';

const BASE_URL: string = import.meta.env.VITE_API_SERVER_BASE_URL;

function App() {
  const [suggestionLanguages, setSuggestionLanguages] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(
    getSelectedLanguagesFromLocalStorage()
  );

  const cache = useRef<Record<string, string[]>>({});

  const handleSuggestionSelect = (language: string) => {
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

  const search = useMemo(
    () =>
      debounce(async (language: string) => {
        if (!language) {
          setSuggestionLanguages([]);
          return;
        }

        if (cache.current[language]) {
          setSuggestionLanguages(cache.current[language]);
          return;
        }

        const response = await fetch(
          `${BASE_URL}/languages?keyword=${language}`
        );
        const data: string[] = await response.json();
        cache.current[language] = data;
        setSuggestionLanguages(data);
      }, 200),
    []
  );

  return (
    <main className="App">
      <SelectedLanguage languages={selectedLanguages} />
      <SearchInput
        suggestionItems={suggestionLanguages}
        onChange={search}
        onSelect={handleSuggestionSelect}
      />
    </main>
  );
}

export default App;
