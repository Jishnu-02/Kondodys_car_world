import React, { useState, useEffect } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css"; // Import the styles

import style from "./CarImageLightbox.module.css";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Animation imports
import AOS from "aos";
import "aos/dist/aos.css";

const CarImageLightbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS with options (adjust duration as needed)
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1686533307024-956d345e145e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1687676407223-40b4faff5a58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1682687220161-e3e7388e4fad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    // Add more image URLs here
  ];

  const openLightbox = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <MKBox component="section" pt={5} pb={8} width="100%">
      <Container>
        <MKTypography variant="h2" pb={3}>
          Image Gallery
        </MKTypography>
        <Grid className={style.image_container} data-aos="fade-left" item>
          {images.map((image, index) => (
            <Grid item xs={12} sm={1} md={4} lg={4} key={index} pr={2} pb={2}>
              <img
                src={image}
                width="100%"
                alt={`Image ${index}`}
                onClick={() => openLightbox(index)}
                className={style.image_grid}
              />
            </Grid>
          ))}
        </Grid>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          />
        )}
      </Container>
    </MKBox>
  );
};

export default CarImageLightbox;
