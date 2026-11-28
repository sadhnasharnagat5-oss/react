/** @format */

const ProductCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, category, price, defaultPrice, imageId, costForTwo } =
    resData?.info || {};

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
        {name}
      </span>
      <span
        style={{
          fontSize: "14px",
          fontWeight: "500",
          color: "#666666",
        }}>
        {costForTwo}
      </span>
    </div>
  );
};
export default ProductCard;
