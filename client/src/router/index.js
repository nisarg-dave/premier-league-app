import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Standings from "../views/Standings.vue";
import Fixtures from "../views/Fixtures.vue";
import Statistics from "../views/Statistics.vue";
import TopScorers from "../views/TopScorers.vue";
import TopAssists from "../views/TopAssists.vue";
import LiveScores from "../views/LiveScores.vue";
import Store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../layouts/Login.vue"),
    meta: {
      hideForAuth: true,
    },
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
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/standings",
        name: "standings",
        component: Standings,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/fixtures",
        name: "fixtures",
        component: Fixtures,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/statistics/:id",
        name: "statistics",
        component: Statistics,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/topscorers",
        name: "topscorers",
        component: TopScorers,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/topassists",
        name: "topassists",
        component: TopAssists,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/livescores",
        name: "livescores",
        component: LiveScores,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (Store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (Store.getters.isAuthenticated) {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
