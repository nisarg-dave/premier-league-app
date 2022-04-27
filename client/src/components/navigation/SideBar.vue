<template>
  <v-navigation-drawer
    v-model="showSideBar"
    app
    floating
    :class="[getSelectedTeam !== null ? `${getSelectedTeam}` : 'springGreen']"
  >
    <v-list-item class="mt-1 ml-13 d-flex justify-space-around">
      <router-link to="/">
        <v-img
          src="https://media.api-sports.io/football/leagues/39.png"
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
    ...mapGetters(["getSelectedTeam"]),
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
