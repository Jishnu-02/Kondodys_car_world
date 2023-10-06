/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Sections
import GoogleMap from "components/GoogleMap.js";
import GetInTouch from "./GetInTouch";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactInfo() {
  useEffect(() => {
    AOS.init({ duration: 1800 }); // Initialize AOS with options (adjust duration as needed)
  }, []);
  return (
    <MKBox component="section" py={5} data-aos="fade-up">
      <Container py={2}>
        <Grid container>
          <Grid md={12} lg={8} item sx={{ margin: "auto" }}>
            <GoogleMap />
          </Grid>
          <Grid md={12} lg={4} item sx={{ margin: "auto" }} data-aos="fade-up">
            <GetInTouch />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
