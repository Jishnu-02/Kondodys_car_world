// Pages
import VehicleList from "pages/VehicleList.js";
import Cars from "pages/LandingPages/Cars";

const routes = [
  {
    name: "Vehicle List",
    route: "/pages/vehicle-list",
    component: <VehicleList />,
  },
  {
    name: "cars",
    route: "/pages/landing-pages/cars",
    component: <Cars />,
  },
];

export default routes;
