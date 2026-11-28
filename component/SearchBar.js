/** @format */

const SearchBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px 0",
      }}>
      <input
        type='text'
        placeholder='Search restaurants or food...'
        style={{
          width: "320px",
          padding: "10px 16px",
          fontSize: "15px",
          border: "1px solid #cccccc",
          borderRadius: "24px",
          outline: "none",
        }}
      />
    </div>
  );
};

export default SearchBar;
