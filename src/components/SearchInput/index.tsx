// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SearchInputProps {}

const SearchInput = (props: SearchInputProps) => {
  return (
    <form className="SearchInput">
      <input
        className="SearchInput__input"
        type="text"
        placeholder="프로그램 언어를 입력하세요."
        value="Script"
      />
    </form>
  );
};

export default SearchInput;
