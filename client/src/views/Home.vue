<template>
  <div class="d-flex flex-column">
    <div class="d-flex flex-column align-center">
      <h1 class="white--text text-center">Home</h1>
      <div v-if="getSelectedTeam === null">
        <v-select
          v-model="selectedTeam"
          clearable
          label="Choose your team"
          :items="teams"
          class="springGreen pa-4"
        />
      </div>
    </div>
    <div v-if="getSelectedTeam !== null" class="d-flex flex-row-reverse">
      <v-btn :class="`${getSelectedTeam}-Btn`" @click="changeTeam()"
        >Change Team</v-btn
      >
    </div>
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
    ...mapGetters(["getTeams", "getSelectedTeam"]),
    teams() {
      return this.getTeams.map((team) => this.convertTeams(team.teamName));
    },
  },
  methods: {
    ...mapActions(["fetchTeams"]),
    ...mapMutations(["setSelectedTeam", "resetSelectedTeam"]),
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
    changeTeam() {
      this.resetSelectedTeam();
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

<style scoped>
.Arsenal-Btn {
  background-color: #ffffff !important;
}
.Villa-Btn {
  background-color: #670e36 !important;
}
.Brighton-Btn {
  background-color: #fdb913 !important;
}
.Brentford-Btn {
  background-color: #ffffff !important;
}
.Burnley-Btn {
  background-color: #97d9f6 !important;
}
.Chelsea-Btn {
  background-color: #ffffff !important;
}
.Palace-Btn {
  background-color: #c4122e !important;
}
.Everton-Btn {
  background-color: #ffffff !important;
}
.Leicester-Btn {
  background-color: #ffffff !important;
}
.Liverpool-Btn {
  background-color: #d00027 !important;
}
.Leeds-Btn {
  background-color: #ffcd00 !important;
}
.City-Btn {
  background-color: #ffffff !important;
}
.United-Btn {
  background-color: #ffe500 !important;
}
.Newcastle-Btn {
  background-color: #ffffff !important;
}
.Norwich-Btn {
  background-color: #fff200 !important;
}
.Southampton-Btn {
  background-color: #22b24c !important;
}
.Tottenham-Btn {
  background-color: #ffffff !important;
}
.Watford-Btn {
  background-color: #fbee23 !important;
}
.Hammers-Btn {
  background-color: #2dafe5 !important;
}
.Wolves-Btn {
  background-color: #fdb913 !important;
}
</style>