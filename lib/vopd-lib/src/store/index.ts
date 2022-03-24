import { createStore } from "vuex";
import layout from "./layout";
import page from "./page";
import widget from "./widget";
const store = createStore({
  modules: {
      layout:layout,
      page: page,
      widget:widget
  },
});
 

export default store;