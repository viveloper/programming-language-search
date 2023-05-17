interface SelectedLanguageProps {
  languages: string[];
}

const SelectedLanguage = ({ languages }: SelectedLanguageProps) => {
  return (
    <div className="SelectedLanguage">
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedLanguage;
