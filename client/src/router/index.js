import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Standings from "../views/Standings.vue";
import Fixtures from "../views/Fixtures.vue";
import Statistics from "../views/Statistics.vue";
import TopScorers from "../views/TopScorers.vue";
import TopAssists from "../views/TopAssists.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../layouts/Login.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../layouts/MainView.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/standings",
        name: "standings",
        component: Standings,
      },
      {
        path: "/fixtures",
        name: "fixtures",
        component: Fixtures,
      },
      {
        path: "/statistics",
        name: "statistics",
        component: Statistics,
      },
      {
        path: "/topscorers",
        name: "topscorers",
        component: TopScorers,
      },
      {
        path: "/topassists",
        name: "topassists",
        component: TopAssists,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
