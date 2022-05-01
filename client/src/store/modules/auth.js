const state = {
  user: {
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
};
const actions = {};
const mutations = {
  setSelectedTeam(state, { selectedTeam, selectedTeamLogo }) {
    state.user.selectedTeam = selectedTeam;
    state.user.selectedTeamLogo = selectedTeamLogo;
  },
  resetSelectedTeam(state) {
    state.user.selectedTeam = null;
  },
};

export default { state, getters, actions, mutations };
