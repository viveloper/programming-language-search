import React from 'react';

interface SelectedLanguageProps {
  languages: string[];
}

export const SelectedLanguage = React.memo(
  ({ languages }: SelectedLanguageProps) => {
    return (
      <div className="SelectedLanguage">
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
    );
  }
);
