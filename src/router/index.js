import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Building from "../views/BuildingView.vue";
import Location from "../views/LocationView.vue";
import AddLocationView from "../views/AddLocationView.vue";
import AddBuildingView from "../views/AddBuildingView.vue";
import EditBuildingView from "../views/EditBuildingView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/building/:id",
    name: "Building",
    component: Building,
  },
  {
    path: "/location/:id",
    name: "Location",
    component: Location,
  },
  {
    path: "/add-location/:id",
    name: "AddLocationView",
    component: AddLocationView,
  },
  {
    path: "/add-building",
    name: "AddBuildingView",
    component: AddBuildingView,
  },

  {
    path: "/edit-building/:id",
    name: "EditBuildingView",
    component: EditBuildingView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
