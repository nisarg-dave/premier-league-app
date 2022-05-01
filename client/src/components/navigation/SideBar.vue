<template>
  <v-navigation-drawer
    v-model="showSideBar"
    app
    floating
    :class="[
      getSelectedTeam !== null ? `${getSelectedTeam}-Side` : 'springGreen',
    ]"
  >
    <v-list-item class="mt-1 ml-13 d-flex justify-space-around">
      <router-link to="/">
        <v-img
          v-if="getSelectedTeam === null"
          src="https://media.api-sports.io/football/leagues/39.png"
          max-height="100"
          max-width="50"
        />
        <v-img
          v-else
          :src="getSelectedTeamLogo"
          max-height="100"
          max-width="50"
        />
      </router-link>
    </v-list-item>
    <v-list>
      <v-divider color="black" />
      <v-list-item link :to="{ name: 'home' }">
        <v-icon color="black" class="ml-2">mdi-home</v-icon>
        <v-list-item-title class="ml-8 mt-2">Home</v-list-item-title>
      </v-list-item>
      <v-divider color="black" />
      <v-list-item link :to="{ name: 'livescores' }">
        <v-icon color="black" class="ml-2">mdi-scoreboard</v-icon>
        <v-list-item-title class="ml-8 mt-2">Live Scores</v-list-item-title>
      </v-list-item>
      <v-divider color="black" />
      <v-list-item link :to="{ name: 'fixtures' }">
        <v-icon color="black" class="ml-2">mdi-calendar-arrow-right</v-icon>
        <v-list-item-title class="ml-8 mt-2">Fixtures</v-list-item-title>
      </v-list-item>
      <v-divider color="black" />
      <v-list-item link :to="{ name: 'standings' }">
        <v-icon color="black" class="ml-2">mdi-podium-gold</v-icon>
        <v-list-item-title class="ml-8 mt-2">League Table</v-list-item-title>
      </v-list-item>
      <v-divider color="black" />
      <v-list-item link :to="{ name: 'topscorers' }">
        <v-icon color="black" class="ml-2">mdi-soccer</v-icon>
        <v-list-item-title class="ml-8 mt-2">Top Scorers</v-list-item-title>
      </v-list-item>
      <v-divider color="black" />
      <v-list-item link :to="{ name: 'topassists' }">
        <v-icon color="black" class="ml-2">mdi-soccer-field</v-icon>
        <v-list-item-title class="ml-8 mt-2">Top Assists</v-list-item-title>
      </v-list-item>
      <v-divider color="black" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    value: Boolean,
  },
  name: "SideBar",
  computed: {
    ...mapGetters(["getSelectedTeam", "getTeams", "getSelectedTeamLogo"]),

    showSideBar: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style scoped>
.Arsenal-Side {
  background-color: #ffffff !important;
}
.Villa-Side {
  background-color: #fee505 !important;
}
.Brighton-Side {
  background-color: #fdb913 !important;
}
.Brentford-Side {
  background-color: #ffffff !important;
}
.Burnley-Side {
  background-color: #fff30d !important;
}
.Chelsea-Side {
  background-color: #ffffff !important;
}
.Palace-Side {
  background-color: #c4122e !important;
}
.Everton-Side {
  background-color: #ffffff !important;
}
.Leicester-Side {
  background-color: #ffffff !important;
}
.Liverpool-Side {
  background-color: #d00027 !important;
}
.Leeds-Side {
  background-color: #ffffff !important;
}
.City-Side {
  background-color: #ffffff !important;
}
.United-Side {
  background-color: #ffe500 !important;
}
.Newcastle-Side {
  background-color: #ffffff !important;
}
.Norwich-Side {
  background-color: #fff200 !important;
}
.Southampton-Side {
  background-color: #ffffff !important;
}
.Tottenham-Side {
  background-color: #ffffff !important;
}
.Watford-Side {
  background-color: #ed2127 !important;
}
.Hammers-Side {
  background-color: #f8d742 !important;
}
.Wolves-Side {
  background-color: #fdb913 !important;
}
</style>
