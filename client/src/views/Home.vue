<template>
  <div>
    <h1 class="white--text text-center">Home</h1>
    <v-select v-model="selectedTeam" :items="teams" />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      selectedTeam: "",
      // teams: [
      //   "Manchester United",
      //   "Newcastle",
      //   "Watford",
      //   "Wolves",
      //   "Liverpool",
      //   "Southampton",
      //   "Arsenal",
      //   "Burnley",
      //   "Everton",
      //   "Leicester",
      //   "Tottenham",
      //   "West Ham",
      //   "Chelsea",
      //   "Manchester City",
      //   "Brighton",
      //   "Crystal Palace",
      //   "Brentford",
      //   "Leeds",
      //   "Aston Villa",
      //   "Norwich",
      // ],
    };
  },
  computed: {
    ...mapGetters(["getTeams"]),
    teams() {
      return this.getTeams.map((team) => this.convertTeams(team));
    },
  },
  methods: {
    ...mapActions(["fetchTeams"]),
    ...mapMutations(["setSelectedTeam"]),
    convertTeams(team) {
      if (team == "Manchester United") {
        return "United";
      } else if (team == "Aston Villa") {
        return "Villa";
      } else if (team == "Manchester City") {
        return "City";
      } else if (team == "Crystal Palace") {
        return "Palace";
      } else if (team == "West Ham") {
        return "Hammers";
      } else {
        return team;
      }
    },
  },
  watch: {
    selectedTeam(val) {
      this.setSelectedTeam({ selectedTeam: val });
    },
  },
  async created() {
    await this.fetchTeams();
  },
};
</script>
