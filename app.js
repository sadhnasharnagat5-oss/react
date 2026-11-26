/** @format */

import React from "react";
import ReactDOM from "react-dom/client";

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

const ProductCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "240px",
        padding: "12px",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        cursor: "pointer",
      }}>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl977JU9D6xOsfpuxT-uiFHcc9WR-5lNuVgxS5gvkkgg&s=10'
        alt='Restaurant'
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px",
          backgroundColor: "#f4f4f4",
        }}
      />
      <span
        style={{
          fontSize: "16px",
          fontWeight: "600",
          color: "#222222",
          marginBottom: "4px",
        }}>
        Restronamr
      </span>
      <span
        style={{
          fontSize: "14px",
          fontWeight: "500",
          color: "#666666",
        }}>
        Price
      </span>
    </div>
  );
};

// const ProductListing=()=>{

// }

const AppLayout = () => {
  return (
    <div className='container'>
      <Header />
      <ProductCard />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
