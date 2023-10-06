import React, { useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import AOS from "aos";
import "aos/dist/aos.css";
// import MKTypography from "components/MKTypography";
// import VerticalTable from "./VerticalTable";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
// import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

export default function AboutVehicle() {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with options (adjust duration as needed)
  }, []);
  return (
    <MKBox component="section" pt={3} pb={8} width="100%">
      <Container>
        <Grid container item>
          <MKTypography variant="h2" pb={3}>
            About Vehicle
          </MKTypography>
          <MKTypography variant="body1" color="text" data-aos="fade-up">
            The 2022 LandCruiser always had a spirit of exploration and discovery backed by an
            incredible ability to perform in the most rugged conditions the world has on offer. The
            LandCruiser 300 continues this spirit giving you the performance to get out there and
            back with confidence.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}
