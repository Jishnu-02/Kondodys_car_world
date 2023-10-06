// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Components
import MKBox from "components/MKBox";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

// Routes
// import mainRoutes from "main.routes";

export default function VehicleListCard() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
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
              title="Toyota Camry"
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
      </Container>
    </MKBox>
  );
}
