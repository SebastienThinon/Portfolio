import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueTxtAnime from "vue-txt-anime";

const app = createApp(App);
app.use(VueTxtAnime);
app.use(router);

app.mount("#app");
