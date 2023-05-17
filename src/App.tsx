import { useMemo, useRef, useState } from 'react';
import debounce from 'debounce';
import { SearchInput, SelectedLanguage } from './components';
import {
  getSelectedLanguagesFromLocalStorage,
  setSelectedLanguagesToLocalStorage,
} from './utils/storage';
import { getLanguages } from './api/language';

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
      debounce(async (keyword: string) => {
        if (!keyword) {
          setSuggestionLanguages([]);
          return;
        }
        if (cache.current[keyword]) {
          setSuggestionLanguages(cache.current[keyword]);
          return;
        }

        try {
          const data = await getLanguages(keyword);
          cache.current[keyword] = data;
          setSuggestionLanguages(data);
        } catch (error) {
          throw new Error('error occurred.');
        }
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
