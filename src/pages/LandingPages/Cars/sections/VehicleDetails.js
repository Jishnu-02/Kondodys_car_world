import React, { useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import AOS from "aos";
import "aos/dist/aos.css";

import VehicleMainImage from "./VehicleMainImage";
// import AboutVehicle from "./AboutVehicle";
// import CarData from "./VehicleData";

export default function VehicleDetails() {
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS with options (adjust duration as needed)
  }, []);
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container spacing={3} item>
          <Grid container justifyContent="center" alignItems="center" item pb={4}>
            <MKTypography variant="h1">Toyota Camry</MKTypography>
          </Grid>
        </Grid>
        <VehicleMainImage />
      </Container>
    </MKBox>
  );
}
