import React from "react";
import indofonwew from "../img/indofonwew.svg";
import product1 from "../img/product1.jpg";
// import gambar lainnya jika dibutuhkan
import "./ProductCarousel.css"; // Import CSS terpisah untuk styling

const ProductCarousel = () => {
  const products = [
    { id: 1, name: "Produk 1", image: product1 },
    { id: 2, name: "Produk 2", image: product1 },
    { id: 3, name: "Produk 3", image: product1 },
  ];

  return (
    <div className="carousel-container">
      <h2 style={{ textAlign: "center", color: " #4caf50" }}>Produk kami</h2>
      <div className="carousel-products">
        {products.map((product) => (
          <div key={product.id} className="carousel-item">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
      <div>
        {" "}
        <img
          src={indofonwew}
          className="productsepek"
          style={{ width: "80%", marginLeft: "10%", height: "3%" }}
        />
      </div>
    </div>
  );
};

export default ProductCarousel;
