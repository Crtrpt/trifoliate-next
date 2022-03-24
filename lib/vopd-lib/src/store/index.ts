import { createStore } from "vuex";
import layout from "./layout";
import page from "./page";
const store = createStore({
  modules: {
      layout:layout,
      page: page,
  },
});
 

export default store;