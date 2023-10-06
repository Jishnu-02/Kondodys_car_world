// components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
// import MKInput from "components/MKInput";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Sections
import Contact from "./sections/Contact";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
// import bgImage from "assets/images/illustrations/illustration-reset.jpg";

// Style
import style from "./ContactUs.module.css";

function ContactUs() {
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(https://images.unsplash.com/photo-1618418721668-0d1f72aa4bab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
              className={style.bannerTitle}
            >
              Contact Us
            </MKTypography>
            {/* <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Unlock Your Journey: Discover Quality Reused Cars
            </MKTypography> */}
            {/* <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography> */}
            {/* <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox> */}
          </Grid>
        </Container>
      </MKBox>
      {/* <MKBox position="fixed" top="0.5rem" width="100%"></MKBox> */}
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* <Grid container alignItems="center" >
          <Grid item xs={12} lg={12}>
            <MKBox
              display="flex"
              // width="calc(100% - 2rem)"
              // height="100vh"
              borderRadius="lg"
              justifyContent="center"
              alignItems="center"
              // mt={2}
              // sx={{ backgroundImage: `url(${bgImage})` }}
            >
              <Container className={style.container}>
                <Grid item lg={6}>
                  <MKBox
                    bgColor="white"
                    borderRadius="xl"
                    shadow="lg"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    lg={6}
                    // mt={{ xs: 20, sm: 18, md: 20 }}
                    // mb={{ xs: 20, sm: 18, md: 20 }}
                    // mx={3}
                  >
                    <MKBox
                      variant="gradient"
                      bgColor="info"
                      coloredShadow="info"
                      borderRadius="lg"
                      p={2}
                      mx={2}
                      mt={-3}
                      className={style.header}
                    >
                      <MKTypography variant="h3" color="#fbe903" textAlign="center">
                        Send Us A Message
                      </MKTypography>
                    </MKBox>
                    <MKBox p={3}>
                      <MKTypography variant="body2" color="text" mb={3}>
                        For further enquires, please email hello@creative-tim.com or contact using
                        our contact form.
                      </MKTypography>
                      <MKBox width="100%" component="form" method="post" autoComplete="off">
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <MKInput
                              variant="standard"
                              label="Full Name"
                              InputLabelProps={{ shrink: true }}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <MKInput
                              type="email"
                              variant="standard"
                              label="Email"
                              InputLabelProps={{ shrink: true }}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <MKInput
                              variant="standard"
                              label="How can we help you?"
                              // placeholder="Describe your problem in at least 250 characters"
                              InputLabelProps={{ shrink: true }}
                              multiline
                              fullWidth
                              rows={6}
                            />
                          </Grid>
                        </Grid>
                        <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                          <MKButton type="submit" variant="gradient" className={style.header}>
                            Send Message
                          </MKButton>
                        </Grid>
                      </MKBox>
                    </MKBox>
                  </MKBox>
                </Grid>
              </Container>
            </MKBox>
          </Grid>
        </Grid> */}
        <Contact />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
