import { useState } from 'react';
import { Suggestion } from './Suggestion';

interface SearchInputProps {
  suggestionItems: string[];
  onChange: (value: string) => void;
  onSelect: (value: string) => void;
}

export const SearchInput = ({
  suggestionItems,
  onChange,
  onSelect,
}: SearchInputProps) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <>
      <form className="SearchInput" onSubmit={(e) => e.preventDefault()}>
        <input
          className="SearchInput__input"
          type="text"
          placeholder="프로그램 언어를 입력하세요."
          autoFocus
          value={value}
          onChange={handleInputChange}
        />
      </form>
      <Suggestion
        items={suggestionItems}
        emphasisWord={value}
        onSelect={onSelect}
      />
    </>
  );
};
