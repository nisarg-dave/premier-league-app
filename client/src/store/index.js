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
    fixtures: [],
    liveScores: [],
    stats: [],
    teams: [],
    selectedTeam: null,
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
    getFixtures(state) {
      return state.fixtures;
    },
    getLiveScores(state) {
      return state.liveScores;
    },
    getStats(state) {
      return state.stats;
    },
    getTeams(state) {
      return state.teams;
    },
    getSelectedTeam(state) {
      return state.selectedTeam;
    },
  },
  actions: {
    async fetchTopScorers(context) {
      const { data } = await axios.get("/top/scorers");
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
      const { data } = await axios.get("/standings");
      context.commit("setLeagueTable", {
        leagueTableArr: data,
      });
    },
    async fetchFixtures(context) {
      const { data } = await axios.get("/fixtures");
      context.commit("setFixtures", {
        fixturesArr: data,
      });
    },
    async fetchLiveScores(context) {
      const { data } = await axios.get("/liveScores");
      context.commit("setLiveScores", {
        liveScoresArr: data,
      });
    },
    async fetchStats(context, gameId) {
      const { data } = await axios.get(`/statistics/${gameId}`);
      context.commit("setStats", {
        statsArr: data,
      });
    },
    async fetchTeams(context) {
      const { data } = await axios.get("/teams");
      context.commit("setTeams", {
        teamsArr: data,
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
    setFixtures(state, { fixturesArr }) {
      state.fixtures = fixturesArr;
    },
    setLiveScores(state, { liveScoresArr }) {
      state.liveScores = liveScoresArr;
    },
    setStats(state, { statsArr }) {
      state.stats = statsArr;
    },
    setTeams(state, { teamsArr }) {
      state.teams = teamsArr;
    },
    setSelectedTeam(state, { selectedTeam }) {
      state.selectedTeam = selectedTeam;
    },
  },
  modules: {},
});
