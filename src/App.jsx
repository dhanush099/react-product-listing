import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import productsData from "./products";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const handleAddToCart = (product) => {
    console.log(`Added to Cart: ${product.name}`);
  };

  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  const filteredProducts = productsData
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (category === "All" ? true : p.category === category))
    .sort((a, b) => {
      if (sort === "priceLowHigh") return a.price - b.price;
      if (sort === "priceHighLow") return b.price - a.price;
      if (sort === "ratingHighLow") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Filters */}
      <div className="bg-white shadow-md rounded-lg max-w-6xl mx-auto mt-6 p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search products..."
          className="border border-gray-300 p-2 rounded-lg w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <select
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="priceLowHigh">Price: Low → High</option>
          <option value="priceHighLow">Price: High → Low</option>
          <option value="ratingHighLow">Rating: High → Low</option>
        </select>
      </div>

      {/* Product List */}
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
