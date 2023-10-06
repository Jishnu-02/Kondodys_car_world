import React, { useEffect } from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import Transmission from "assets/images/car-specs/transmission.png";
import KMDone from "assets/images/car-specs/kilometers.png";
import Engine from "assets/images/car-specs/engine.png";
import Fuel from "assets/images/car-specs/fuel.png";
import CarModel from "assets/images/car-specs/car_model.png";
import Price from "assets/images/car-specs/price.png";

// Style
import style from "./VehicleData.module.css";

export default function VehicleData() {
  useEffect(() => {
    AOS.init({ duration: 1800 }); // Initialize AOS with options (adjust duration as needed)
  }, []);
  return (
    <MKBox
      component="section"
      pt={3}
      pb={8}
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
      className={style.parallaxDiv}
    >
      <Grid container className={style.section}>
        <Container>
          <MKTypography variant="h2" className={style.specTitle}>
            Specifications
          </MKTypography>
          <Grid className={style.specs} data-aos="fade-up" pt={8} item>
            <Grid xs={6} sm={6} md={4} lg={2} item>
              <MKBox component="img" src={CarModel} alt="Car Model" mb={2} className={style.icon} />
              <MKTypography
                variant="body1"
                middle
                textAlign="center"
                color="white"
                fontWeight="regular"
                textTransform="capitalize"
              >
                FJA300L-GNUSYV
              </MKTypography>
            </Grid>
            <Grid xs={6} sm={6} md={4} lg={2} item>
              <MKBox
                component="img"
                src={Transmission}
                alt="Transmission"
                mb={2}
                className={style.icon}
              />
              <MKTypography
                variant="body1"
                middle
                textAlign="center"
                color="white"
                fontWeight="regular"
                textTransform="capitalize"
              >
                automatic
              </MKTypography>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <MKBox component="img" src={KMDone} alt="KiloMeters" mb={2} className={style.icon} />
              <MKTypography
                variant="body1"
                middle
                textAlign="center"
                color="white"
                fontWeight="regular"
                textTransform="uppercase"
              >
                10000 KM
              </MKTypography>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <MKBox component="img" src={Engine} alt="Engine" mb={2} className={style.icon} />
              <MKTypography
                variant="body1"
                middle
                textAlign="center"
                color="white"
                fontWeight="regular"
                textTransform="uppercase"
              >
                3000 CC
              </MKTypography>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <MKBox component="img" src={Fuel} alt="Fuel" mb={2} className={style.icon} />
              <MKTypography
                variant="body1"
                middle
                textAlign="center"
                color="white"
                fontWeight="regular"
                textTransform="capitalize"
              >
                Petrol
              </MKTypography>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={2}>
              <MKBox component="img" src={Price} alt="Price" mb={2} className={style.icon} />
              <MKTypography
                variant="body1"
                middle
                textAlign="center"
                color="white"
                fontWeight="regular"
                textTransform="uppercase"
              >
                35.6 L
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </MKBox>
  );
}
