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
      <v-btn :class="`${getSelectedTeam}`" @click="changeTeam()"
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
      return this.getTeams.map((team) => this.convertTeams(team));
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
.Arsenal {
  background-color: #ffffff;
}
.Villa {
  background-color: #fee505;
}
.Brighton {
  background-color: #fdb913;
}
.Brentford {
  background-color: #ffffff;
}
.Burnley {
  background-color: #fff30d;
}
.Chelsea {
  background-color: #ffffff;
}
.Palace {
  background-color: #c4122e;
}
.Everton {
  background-color: #ffffff;
}
.Leicester {
  background-color: #ffffff;
}
.Liverpool {
  background-color: #d00027;
}
.Leeds {
  background-color: #ffcd00;
}
.City {
  background-color: #ffffff;
}
.United {
  background-color: #ffe500;
}
.Newcastle {
  background-color: #ffffff;
}
.Norwich {
  background-color: #fff200;
}
.Southampton {
  background-color: #22b24c;
}
.Tottenham {
  background-color: #ffffff;
}
.Watford {
  background-color: #fbee23;
}
.Hammers {
  background-color: #f8d742;
}
.Wolves {
  background-color: #fdb913;
}
</style>