import React, { useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// // import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// @mui material components
import MuiLink from "@mui/material/Link";

// react-router-dom components
import { Link } from "react-router-dom";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// Images
// import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgFront from "assets/images/rotating-card/rotating-card-2.jpeg";
import bgBack from "assets/images/rotating-card/Rot-back.jpeg";
// import bgBack from "assets/images/rotating-card-bg-back.jpeg";

// Style
import style from "./ParallaxFeature.module.css";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";

// Routes
import mainRoutes from "main.routes";

function ParallaxFeature() {
  useEffect(() => {
    AOS.init({ duration: 1800 }); // Initialize AOS with options (adjust duration as needed)
  }, []);
  return (
    <MKBox component="section" pt={3} pb={8} className={style.bgImage}>
      <Grid className={style.parallaxDiv}>
        <Container sx={{ padding: 5 }} data-aos="fade-up">
          <Grid className={style.mainGrid}>
            <MKTypography
              fontWeight="medium"
              color="light"
              variant="h1"
              className={style.secondTitle}
              textTransform="uppercase"
              pt={4}
            >
              Looking to add a new member to your
            </MKTypography>
            <br />
            <MKTypography
              fontWeight="medium"
              color="light"
              variant="h1"
              className={style.title}
              textTransform="uppercase"
            >
              family ?
            </MKTypography>
            <br />
            <Grid container>
              <Grid md={12} lg={8} item sx={{ margin: "auto" }}>
                <MKTypography
                  // fontWeight="medium"
                  color="light"
                  variant="body1"
                  // className={style.title}
                  // textTransform="uppercase"
                >
                  Ready to welcome a new member into your automotive family? Our selection of
                  pre-loved cars is here to add a perfect addition to your journey. Find the right
                  fit for your family and hit the road in style and comfort. Explore our range now
                  and drive home with a new companion!
                </MKTypography>
                <Link to={mainRoutes[0].route} className={style.button}>
                  <MKButton
                    component={MuiLink}
                    rel="noreferrer"
                    variant="gradient"
                    size="small"
                    // color="dark"
                    textTransform="uppercase"
                    className={style.btnGrad}
                  >
                    explore
                  </MKButton>
                </Link>
              </Grid>
              <Grid md={12} lg={4} item>
                <RotatingCard>
                  <RotatingCardFront
                    image={bgFront}
                    color="dark"
                    title={<>Embark On a Journey Through Our Automotive Galeria !</>}
                  />
                  <RotatingCardBack
                    image={bgBack}
                    color="dark"
                    title="Discover More"
                    description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                    action={{
                      type: "internal",
                      route: "/pages/vehicle-list",
                      label: "start with header",
                    }}
                  />
                </RotatingCard>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
// ParallaxFeature.propTypes = {
//   content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
// };

export default ParallaxFeature;
