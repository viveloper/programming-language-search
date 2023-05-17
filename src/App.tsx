import { useState } from 'react';
import SearchInput from './components/SearchInput';
import SelectedLanguage from './components/SelectedLanguage';

function App() {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleSelect = (language: string) => {
    alert(language);
    setSelectedLanguages((prev) => {
      const newLanguages = [
        ...prev.filter((item) => item !== language),
        language,
      ];
      return newLanguages.length > 5
        ? newLanguages.slice(newLanguages.length - 5, newLanguages.length)
        : newLanguages;
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
