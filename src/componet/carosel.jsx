import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles for carousel
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const CustomCarousel = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const carouselItems = [
    {
      title: "JASA PASANG PLAFON PVC",
      description:
        "Kami mempunyai pengalaman dan pekerja yang sudah ahli di bidangnya lebih dari 10 tahun. Saat ini kami sudah banyak melayani pelanggan mulai dari pemasangan plafon PVC untuk rumah pribadi, kantor, hotel, room karaoke, restoran, dan lain sebagainya.",
    },
    {
      title: "PLAFON PVC TERBAIK DI INDONESIA",
      description:
        "INDOFON (PT Indonesia Plafon Semesta) merupakan Produk plafon PVC berkualitas di Indonesia. Selain sebagai Produsen dan Sistem Cabang Distribusi Resmi di 34 Provinsi, perusahaan kami juga melayani jasa pemasangan plafon PVC ke seluruh Indonesia yang terdapat dalam paket pelayanan yang disediakan di setiap Cabang Indofon.",
    },
    {
      title: "DISTRIBUTOR PLAFON PVC",
      description:
        "PT Indonesia Plafon Semesta mempunyai cabang distribusi di 34 provinsi seluruh Indonesia yang tergabung dalam Indofon Group. Kami siap melayani kebutuhan Anda untuk produk plafon pvc, lis pvc serta ornament pvc untuk bangunan Anda.",
    },
  ];

  return (
    <Box
      sx={{
        width: isMobile ? "100%" : "80%", // Responsif lebar untuk mobile
        margin: "0 auto",
        marginTop: "40%",
        minHeight: "10vh",
      }}
    >
      <Carousel
        autoPlay
        interval={5000} // Durasi 5 detik
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true} // Panah navigasi
        emulateTouch={true} // Enable swipe gesture on touch devices
      >
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              padding: isMobile ? "20px" : "50px", // Padding responsif
              textAlign: "center", // Teks di tengah
              backgroundColor: "rgba(255, 255, 255, 0.8)", // Background transparan
              borderRadius: "10px", // Rounded corners
              boxShadow: "0 4px 10px rgba(0,0,0,0.0)", // Tambah bayangan untuk kesan estetik
            }}
          >
            <Typography
              variant={isMobile ? "h6" : "h4"}
              component="h2"
              sx={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              {item.title}
            </Typography>
            <Typography variant={isMobile ? "body2" : "body1"}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CustomCarousel;
