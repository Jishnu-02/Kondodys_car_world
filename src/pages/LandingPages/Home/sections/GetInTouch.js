import React, { useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Style
import style from "./GetInTouch.module.css";

// Icons
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";

export default function GetInTouch() {
  useEffect(() => {
    AOS.init({ duration: 1800 }); // Initialize AOS with options (adjust duration as needed)
  }, []);
  return (
    <MKBox component="section">
      <Container>
        <Grid>
          <MKTypography
            fontWeight="medium"
            variant="h2"
            className={style.title}
            pb={4}
            data-aos="fade-up"
            display="flex"
            justifyContent="center"
          >
            Connect With US...
          </MKTypography>
          <Grid className={style.iconGrid}>
            <MKButton
              variant="gradient"
              color="success"
              size="large"
              display="flex"
              justifyContent="center"
              className={style.socialMedia}
              href="https://wa.me/+919037063831/?text=Hello%2C%20I%27m%20interested%20in%20one%20of%20your%20cars"
              target="_blank"
            >
              Whatsapp
              <WhatsAppIcon />
            </MKButton>
            <MKButton
              className={`${style.instagram} ${style.socialMedia}`}
              variant="gradient"
              color="info"
              size="large"
            >
              Instagram
              <InstagramIcon />
            </MKButton>
            <MKButton variant="gradient" color="info" size="large" className={style.socialMedia}>
              Facebook
              <FacebookIcon />
            </MKButton>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              className={`${style.call} ${style.socialMedia}`}
            >
              Call
              <AddIcCallIcon />
            </MKButton>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
