// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SelectedLanguageProps {}

const SelectedLanguage = (props: SelectedLanguageProps) => {
  return (
    <div className="SelectedLanguage">
      <ul>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Elixir</li>
        <li>Java</li>
        <li>PHP</li>
      </ul>
    </div>
  );
};

export default SelectedLanguage;
