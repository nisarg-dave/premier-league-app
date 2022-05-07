import axios from "../../service/axios.js";
import router from "../../router/index.js";

const state = {
  errors: [],
  token: null,
  user: {
    username: null,
    selectedTeam: null,
    selectedTeamLogo: null,
  },
};
const getters = {
  getUser(state) {
    return state.user;
  },
  getSelectedTeam(state) {
    return state.user.selectedTeam;
  },
  getSelectedTeamLogo(state) {
    return state.user.selectedTeamLogo;
  },
  getAuthErrors(state) {
    return state.errors;
  },
  isAuthenticated: (state) => !!state.token,
};
const actions = {
  async signUp(context, user) {
    const response = await axios.post("/auth/signup", {
      username: user.userName,
      email: user.email,
      password: user.password,
      selectedTeam: null,
      selectedTeamLogo: null,
    });
    context.commit("setUserAndToken", {
      response,
    });
  },
  async logIn(context, user) {
    const response = await axios.post("auth/login", {
      username: user.userName,
      password: user.password,
    });
    const { data } = response;
    context.commit("setUserAndToken", {
      response: data,
    });
  },
  async setSelectedTeam(context, selectedTeamObj) {
    const { data } = await axios.post("auth/selectTeam", {
      username: selectedTeamObj.username,
      selectedTeam: selectedTeamObj.selectedTeam,
      selectedTeamLogo: selectedTeamObj.selectedTeamLogo,
    });
    context.commit("setSelectedTeam", {
      response: data,
    });
  },
};
const mutations = {
  setUserAndToken(state, { response }) {
    console.log(response);
    state.token = response?.data?.data?.token;
    axios.defaults.headers.common["authorization"] = `Bearer ${state.token}`;
    state.errors = response?.data?.errors;
    state.user.username = response?.data?.data?.user?.username;
    state.user.selectedTeam = response?.data?.data?.user?.selectedTeam;
    state.user.selectedTeamLogo = response?.data?.data?.user?.selectedTeamLogo;
  },
  setSelectedTeam(state, { response }) {
    state.user.selectedTeam = response?.data?.data?.user?.selectedTeam;
    state.user.selectedTeamLogo = response?.data?.data?.user?.selectedTeamLogo;
  },
  resetSelectedTeam(state) {
    state.user.selectedTeam = null;
    state.user.selectedTeamLogo = null;
  },
  logout(state) {
    state.errors = [];
    state.token = null;
    state.user = {
      username: null,
      selectedTeam: null,
      selectedTeamLogo: null,
    };
    router.go("/login");
  },
};

export default { state, getters, actions, mutations };
