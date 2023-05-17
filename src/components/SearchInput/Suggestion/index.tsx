import { useEffect, useState } from 'react';

interface SuggestionProps {
  languages: string[];
  onSelect: (value: string) => void;
}

const Suggestion = ({ languages, onSelect }: SuggestionProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const onKeyup = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : languages.length - 1
          );
          break;
        case 'ArrowDown':
          setSelectedIndex((prev) =>
            prev < languages.length - 1 ? prev + 1 : 0
          );
          break;
        case 'Enter':
          onSelect(languages[selectedIndex]);
          break;
        default:
          break;
      }
    };
    document.addEventListener('keyup', onKeyup);
    return () => {
      document.removeEventListener('keyup', onKeyup);
    };
  }, [languages, onSelect, selectedIndex]);

  if (languages.length === 0) return null;
  return (
    <div className="Suggestion">
      <ul>
        {languages.map((language, i) => (
          <li
            key={language}
            className={i === selectedIndex ? 'Suggestion__item--selected' : ''}
            onClick={() => onSelect(language)}
          >
            {language}
          </li>
        ))}

        {/* <li className="Suggestion__item--selected">
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
        </li> */}
      </ul>
    </div>
  );
};

export default Suggestion;
