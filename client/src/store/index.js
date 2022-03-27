import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "../service/axios.js";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    topScorers: [],
    topAssists: [],
    leagueTable: [],
  },
  getters: {
    getTopScorers(state) {
      return state.topScorers;
    },
    getTopAssists(state) {
      return state.topAssists;
    },
    getLeagueTable(state) {
      return state.leagueTable;
    },
  },
  actions: {
    async fetchTopScorers(context) {
      const { data } = await axios.get("/top/scorers");
      console.log(data);
      context.commit("setTopScorers", {
        topScorersArr: data,
      });
    },
    async fetchTopAssists(context) {
      const { data } = await axios.get("/top/assists");
      context.commit("setTopAssists", {
        topAssistsArr: data,
      });
    },
    async fetchLeagueTable(context) {
      const { data } = await axios.get("/league-table/standings");
      context.commit("setLeagueTable", {
        leagueTableArr: data,
      });
    },
  },
  mutations: {
    setTopScorers(state, { topScorersArr }) {
      state.topScorers = topScorersArr;
    },
    setTopAssists(state, { topAssistsArr }) {
      state.topAssists = topAssistsArr;
    },
    setLeagueTable(state, { leagueTableArr }) {
      state.leagueTable = leagueTableArr;
    },
  },
  modules: {},
});
