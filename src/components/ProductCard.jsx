/* eslint-disable react/prop-types */
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-xl shadow-sm hover:shadow-lg p-4 flex flex-col items-center bg-white transition transform hover:scale-105">
<img
  src={product.image}
  alt={product.name}
  className="w-full h-48 object-contain mb-3 rounded-md bg-gray-100"
/>


      <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
      <p className="text-gray-600 text-sm mt-1">Category: {product.category}</p>
      <p className="text-blue-600 font-bold text-lg mt-1">Rs.{product.price}</p>
      <p className="text-yellow-500 mt-1">⭐ {product.rating}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
