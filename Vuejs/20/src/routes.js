import User from "./components/user/User.vue";
import UserStart from "./components/user/UserStart.vue";
import UserDetail from "./components/user/UserDetail.vue";
import UserEdit from "./components/user/UserEdit.vue";
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";

export const routes = [
  {
    path: "",
    name: "home",
    components: {
      // Alternative for component key
      default: Home,
      "Header-top": Header,
    },
    // component: Home,
  },
  // Dynamic Route
  // { path: "/user/:id", component: User },
  // below code instead up code (nested route)
  {
    // component: User,
    path: "/user",
    components: {
      // Alternative for component key
      default: User,
      "Header-bottom": Header,
    },
    children: [
      { path: "", component: UserStart },
      { path: ":id", component: UserDetail },
      { path: ":id/edit", component: UserEdit, name: "userEdit" },
    ],
  },
  {
    // path: '/redirect-me', redirect: '/'
    // Another Way to redirect
    path: "/redirect-me",
    redirect: { name: "home" },
  },
  {
    // Setting Up _Catch All_ Routes _ Wildcards
    path: "*",
    redirect: { name: "home" },
  },
];
