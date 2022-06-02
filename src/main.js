import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
import "./assets/fonts/fonts.scss";
import "./assets/styles.scss";
import "./assets/media.scss";

const app = createApp(App);

app.use(router).mount("#app");
