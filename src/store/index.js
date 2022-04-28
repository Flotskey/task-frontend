import { createStore } from "vuex";
import { buildingsModule } from "./buildingsModule";
import { locationsModule } from "./locationsModule";

export default createStore({
  modules: {
    buildingsModule,
    locationsModule,
  },
});
