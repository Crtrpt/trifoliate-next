import { createApp } from "vue";
import App from "./App.vue";
import VopdLib from "../lib/vopd-lib/src/VopdLib";

let app = createApp(App);

var modules = import.meta.globEager("./component/*.vue");

var renders=[];

for (const idx in modules) {
  renders.push(modules[idx].default);
}

app.use(VopdLib, {
  render: renders,
});

app.mount("#app");
