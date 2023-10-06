// @mui material components
import Grid from "@mui/material/Grid";

// style
import style from "./VehicleMainImage.module.css";

export default function VehicleMainImage() {
  return (
    <Grid container itempb={3} data-aos="fade-up">
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Girl in a jacket"
        width="100%"
        // height="600"
        className={style.banner_img}
      />
    </Grid>
  );
}
