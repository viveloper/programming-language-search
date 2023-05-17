import { useEffect, useState } from 'react';
import splitWord from '../../../utils/splitWord';

interface SuggestionProps {
  items: string[];
  emphasisWord: string;
  onSelect: (value: string) => void;
}

const Suggestion = ({ items, emphasisWord, onSelect }: SuggestionProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const onKeyup = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
          break;
        case 'ArrowDown':
          setSelectedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
          break;
        case 'Enter':
          onSelect(items[selectedIndex]);
          break;
        default:
          break;
      }
    };
    document.addEventListener('keyup', onKeyup);
    return () => {
      document.removeEventListener('keyup', onKeyup);
    };
  }, [items, onSelect, selectedIndex]);

  if (items.length === 0) return null;
  return (
    <div className="Suggestion">
      <ul>
        {items.map((language, i) => (
          <li
            key={language}
            className={i === selectedIndex ? 'Suggestion__item--selected' : ''}
            onClick={() => onSelect(language)}
          >
            {splitWord(language, emphasisWord)[0]}
            <span className="Suggestion__item--matched">
              {splitWord(language, emphasisWord)[1]}
            </span>
            {splitWord(language, emphasisWord)[2]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestion;
