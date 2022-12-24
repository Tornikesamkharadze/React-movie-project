import { useGlobalContext } from "../Global/context";
import BgColor from "./BgColor";
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <div className="bg-color">
        <h2>search movies</h2>
        <BgColor />
      </div>
      <input
        value={query}
        className="form-input"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
