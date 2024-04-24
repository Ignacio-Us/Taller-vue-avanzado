import { createApp } from "vue";
import App from "./App.vue";

const UserList = () => import("./components/UserList.vue");
const app = createApp(App);

app.component("async-component", UserList);
app.mount("#app");
