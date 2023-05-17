import { useState } from 'react';
import Suggestion from './Suggestion';

const BASE_URL: string = import.meta.env.VITE_API_SERVER_BASE_URL;

interface SearchInputProps {
  onSelect: (value: string) => void;
}

const SearchInput = ({ onSelect }: SearchInputProps) => {
  const [value, setValue] = useState('');
  const [languages, setLanguages] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    search(e.target.value);
  };

  const search = async (language: string) => {
    if (!language) {
      setLanguages([]);
      return;
    }

    const response = await fetch(`${BASE_URL}/languages?keyword=${language}`);
    const data: string[] = await response.json();
    setLanguages(data);
  };

  return (
    <>
      <form className="SearchInput" onSubmit={(e) => e.preventDefault()}>
        <input
          className="SearchInput__input"
          type="text"
          placeholder="프로그램 언어를 입력하세요."
          value={value}
          onChange={handleInputChange}
        />
      </form>
      <Suggestion languages={languages} onSelect={onSelect} />
    </>
  );
};

export default SearchInput;
