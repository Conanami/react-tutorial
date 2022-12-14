const SearchBox = ({ className, placeholder, onChange }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default SearchBox;
