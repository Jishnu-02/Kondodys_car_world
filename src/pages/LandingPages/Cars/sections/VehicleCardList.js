// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

export default function CarCardList() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid item container spacing={3}>
          <Grid item sm={12} md={4} lg={3} pb={4}>
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
          <Grid item sm={12} md={4} lg={3} pb={4}>
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
          <Grid item sm={12} md={4} lg={3} pb={4}>
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
          <Grid item sm={12} md={4} lg={3} pb={4}>
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
          <Grid item sm={12} md={4} lg={3} pb={4}>
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
