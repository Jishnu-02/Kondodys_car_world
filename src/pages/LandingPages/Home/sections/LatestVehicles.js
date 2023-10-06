import React, { useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Style
import style from "./LatestVehicles.module.css";

//
import NewestVehicles from "./NewestVehicles";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";

export default function LatestVehicles() {
  useEffect(() => {
    AOS.init({ duration: 1800 }); // Initialize AOS with options (adjust duration as needed)
  }, []);
  return (
    <MKBox component="section">
      <Container>
        <Grid>
          <MKTypography
            fontWeight="medium"
            variant="h1"
            className={style.title}
            pb={4}
            data-aos="fade-up"
          >
            Newest Additions to Our Collection...
          </MKTypography>
          <NewestVehicles />
        </Grid>
      </Container>
    </MKBox>
  );
}
