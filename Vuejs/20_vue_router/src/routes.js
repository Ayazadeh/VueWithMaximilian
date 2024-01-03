// import User from "./components/user/User.vue";
// import UserStart from "./components/user/UserStart.vue";
// import UserDetail from "./components/user/UserDetail.vue";
// import UserEdit from "./components/user/UserEdit.vue";
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";

/*

using Lazy-Loading with webpack, which allows components
to be loaded on-demand rather than upfront

with lazy-loading, components are only rendered when needed, one by one.

If you want to render multiple components at once, you
can use grouping (e.g. into a 'userGroup').

*/
const User = (resolve) => {
  require.ensure(
    ["./components/user/User.vue"],
    () => {
      resolve(require("./components/user/User.vue"));
    },
    "userGroup"
  );
};

const UserStart = (resolve) => {
  require.ensure(
    ["./components/user/UserStart.vue"],
    () => {
      resolve(require("./components/user/UserStart.vue"));
    },
    "userGroup"
  );
};

const UserDetail = (resolve) => {
  require.ensure(["./components/user/UserDetail.vue"], () => {
    resolve(require("./components/user/UserDetail.vue"));
  });
};

const UserEdit = (resolve) => {
  require.ensure(["./components/user/UserEdit.vue"], () => {
    resolve(require("./components/user/UserEdit.vue"));
  });
};

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
      "Header-top": Header,
      // "Header-bottom": Header,
    },
    children: [
      { path: "", component: UserStart },
      {
        path: ":id",
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          // this is how we can check if a user is allowed to visit a certain page.
          console.log("inside route setup");
          next();
        },
      },
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
