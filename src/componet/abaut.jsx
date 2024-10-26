import React from "react";
import "./about.css";

const AboutUs = () => {
  return (
    <div
      style={{
        display: "flex",

        backgroundColor: "#f5f5f5",

        minHeight: "20vh", // Ketinggian penuh untuk keselarasan yang lebih baik
        flexWrap: "wrap", // Menyesuaikan item untuk memastikan responsif
        justifyContent: "center", // Center items horizontally
        alignItems: "center", // Center items vertically
      }}
    >
      {/* Bagian Kiri - Video */}

      {/* Bagian Kanan - Teks */}
      <div
        style={{
          flex: "1 1 50%", // Mengambil lebar setengah dari kontainer
          maxWidth: "100%",

          textAlign: "left",
        }}
      >
        <div style={{ flex: "1 1 50%", maxWidth: "100%", textAlign: "center" }}>
          <h1
            style={{
              color: "#2e7d32",
              fontWeight: "bold",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Tentang Kami
          </h1>{" "}
          <iframe
            width="60%"
            height="308"
            src="https://www.youtube.com/embed/baLAZJ-hJ_g?si=tfnrIVigEglT6DQJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ borderRadius: "30px" }}
            className="pidioyt"
          ></iframe>
        </div>
        <h3
          style={{
            fontWeight: "bold",
            marginTop: "",
            fontSize: "1.5rem",
            textAlign: "center",
            color: "#2e7d32",
            paddingLeft: "3%",
            marginRight: "3%",
          }}
        >
          KAMI ADALAH PRODUSEN PLAFON PVC TERBAIK
        </h3>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",

            textAlign: "",
            marginBlock: "10px",

            paddingLeft: "3%",
            marginRight: "3%",
          }}
        >
          IndoFon adalah produsen plafon PVC terpercaya sejak 2018, menghadirkan
          solusi plafon berkualitas tinggi dan tahan lama untuk hunian serta
          ruang komersial. Dengan fokus pada inovasi dan standar internasional,
          kami memastikan setiap produk yang kami tawarkan memenuhi ekspektasi
          tertinggi pelanggan. Didukung oleh PT Indonesia Plafon Semesta sebagai
          distributor resmi yang memiliki cabang di 34 provinsi, kami siap
          melayani kebutuhan plafon PVC Anda di seluruh Indonesia. Dengan tim
          profesional yang berpengalaman, kami berkomitmen memberikan pelayanan
          terbaik dan solusi plafon yang tepat untuk setiap ruang.
        </p>

        <div style={{ textAlign: "center" }}>
          <button
            style={{
              backgroundColor: "#2e7d32", // Warna tombol hijau
              color: "#fff", // Warna teks putih
              border: "none",
              padding: "10px 20px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "",
              marginBottom: "30px",
              borderRadius: "5px",
            }}
          >
            Detail
          </button>
        </div>
      </div>

      {/* Gaya Responsif */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="display: flex"] {
              flex-direction: column;  // Susun secara vertikal di layar kecil
              text-align: center;
            }
            div[style*="padding-left: 20px"] {
              padding-left: 0;         // Hilangkan padding di layar kecil
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutUs;
