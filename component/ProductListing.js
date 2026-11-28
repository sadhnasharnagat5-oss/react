/** @format */
import ProductCard from "./ProductCard";
import resobj from "./utils/mockData";
const ProductListing = () => {
  return (
    <div
      className='productlist'
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}>
      {resobj.restaurants.map((res, index) => (
        <ProductCard key={res?.card?.info?.id || index} resData={res} />
      ))}
    </div>
  );
};

export default ProductListing;
