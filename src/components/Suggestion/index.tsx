// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SuggestionProps {}

const Suggestion = (props: SuggestionProps) => {
  return (
    <div className="Suggestion">
      <ul>
        <li className="Suggestion__item--selected">
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
        </li>
      </ul>
    </div>
  );
};

export default Suggestion;
