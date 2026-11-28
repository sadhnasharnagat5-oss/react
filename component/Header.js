/** @format */
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <div
      className='header'
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
      }}>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-pO6qckNHNPfGjbf-Whj6EDFi-SM2W6gdeFH2zHrZQ&s=10'
        style={{ height: "100px", width: "100px" }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <SearchBar />
        <span>Home</span>
        <span>about us</span>
      </div>
    </div>
  );
};

export default Header;
