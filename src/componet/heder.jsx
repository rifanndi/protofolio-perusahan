import React from "react";
import kantor11 from "../img/kantor11.jpg"; // Your image import
import "./heder.css";

const Heder = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${kantor11})`,

        backgroundSize: "cover", // Make the image cover the entire container
        backgroundPosition: "center", // Center the image
        // Full width of the viewport
        height: "100vh", // Full height of the viewport
        margin: 0, // Remove any margin
        padding: 0, // Remove any padding
        right: 0,
        left: 0,
        top: 0,
        position: "absolute",
        zIndex: -1, // Keep the image behind the content
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Mengatur warna overlay
          zIndex: 0, // Pastikan overlay di belakang konten
        }}
      ></div>
      {/* Content on top of the background image (optional) */}
      <h2 className="h1inpo" style={{}}>
        INDOFON <br />
        Produk Plafon PVC <br /> Terbaik Untuk Properti Anda{" "}
      </h2>
    </div>
  );
};

export default Heder;
