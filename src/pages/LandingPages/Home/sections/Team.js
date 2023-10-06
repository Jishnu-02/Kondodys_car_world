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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Data
import data from "./data/whyChooseUsData";

// import team1 from "assets/images/team-5.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Why Choose Us?
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {data.map((item, index) => {
            return (
              <Grid item xs={12} lg={6} key={index} sx={{ paddingTop: "45px !important" }}>
                <MKBox mb={1} height="100%">
                  <HorizontalTeamCard
                    image={item.image}
                    name={item.name}
                    description={item.description}
                  />
                </MKBox>
              </Grid>
            );
          })}
          {/* <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Transparent History"
                position={{ color: "info", label: "Boss" }}
                description="We believe in transparency and honesty. That's why we provide a comprehensive history for each vehicle. Our buyers have access to detailed reports encompassing previous owners, maintenance records, any accident history, and more. We want you to make an informed decision you can trust."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Competitive Pricing and Financing"
                position={{ color: "info", label: "Athlete" }}
                description="We understand that value matters. Our prices are competitive within the market, ensuring you get the best deal. Additionally, we offer various financing options tailored to suit your needs. Our goal is to make owning your dream car not only exciting but also financially feasible."
              />
            </MKBox>
          </Grid> */}
          {/* <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Exceptional Customer Service"
                position={{ color: "info", label: "JS Developer" }}
                description="Our commitment extends beyond selling cars. We prioritize your experience with us. Our knowledgeable and friendly team is here to assist you at every step of the way. From answering your questions to guiding you through the buying process and providing exceptional after-sales support, your satisfaction is our utmost priority."
              />
            </MKBox>
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
