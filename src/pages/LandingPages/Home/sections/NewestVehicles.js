import React, { useEffect } from "react";
// @mui material components
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

// Animation
import AOS from "aos";
import "aos/dist/aos.css";

export default function NewestVehicles() {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with options (adjust duration as needed)
  }, []);
  return (
    <MKBox component="section" pt={3} pb={8} data-aos="fade-up">
      <Grid container spacing={3}>
        <Grid item sm={12} md={6} lg={4} pb={4} display="flex">
          <CenteredBlogCard
            image="https://images.unsplash.com/photo-1692532560357-ff67799c921a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            category={{ color: "warning", label: "hub" }}
            title="Shared Coworking"
            description="Use border utilities to quickly style the border and border-radius of an element. Great for images,  buttons."
            author={{
              image: "https://bit.ly/3pZfIPh",
              name: "Mathew Glock",
              date: "Posted on 28 February",
            }}
            action={{
              type: "internal",
              route: "/pages/landing-pages/cars",
              label: "Go Somewhereeeee",
            }}
            height="100%"
          />
        </Grid>
        <Grid item sm={12} md={6} lg={4} pb={4}>
          <CenteredBlogCard
            image="https://bit.ly/3EZlfcW"
            category={{ color: "warning", label: "hub" }}
            title="Shared Coworking"
            description="Use border utilities to quickly style the border and border-radius of an element. Great for images,  buttons."
            author={{
              image: "https://bit.ly/3pZfIPh",
              name: "Mathew Glock",
              date: "Posted on 28 February",
            }}
            action={{
              type: "internal",
              route: "/somewhere",
              label: "Go Somewhere",
            }}
          />
        </Grid>
        <Grid item sm={12} md={6} lg={4} pb={4}>
          <CenteredBlogCard
            image="https://bit.ly/3EZlfcW"
            category={{ color: "warning", label: "hub" }}
            title="Shared Coworking"
            description="Use border utilities to quickly style the border and border-radius of an element. Great for images,  buttons."
            author={{
              image: "https://bit.ly/3pZfIPh",
              name: "Mathew Glock",
              date: "Posted on 28 February",
            }}
            action={{
              type: "internal",
              route: "/somewhere",
              label: "Go Somewhere",
            }}
          />
        </Grid>
      </Grid>
    </MKBox>
  );
}
