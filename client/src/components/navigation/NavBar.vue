<template>
  <v-app-bar
    app
    dense
    flat
    hide-on-scroll
    :class="[
      getSelectedTeam !== null ? `${getSelectedTeam}-Nav` : 'springGreen',
    ]"
  >
    <v-col cols="auto">
      <v-app-bar-nav-icon color="black" @click="$emit('input', !value)" />
    </v-col>
    <v-col class="title-wrapper">
      <v-toolbar-title class="font-weight-black">The Prem</v-toolbar-title>
    </v-col>
    <v-divider vertical />
    <v-menu offset-y>
      <template v-slot:activator="{ on, sattrs }">
        <v-col cols="auto">
          <v-btn
            small
            depressed
            tile
            :class="[
              getSelectedTeam !== null
                ? `${getSelectedTeam}-Nav`
                : 'springGreen',
            ]"
            v-bind="sattrs"
            v-on="on"
          >
            <v-icon>mdi-cog</v-icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </v-col>
      </template>
      <v-list
        :class="[
          getSelectedTeam !== null ? `${getSelectedTeam}-Nav` : 'springGreen',
        ]"
      >
        <v-list-item>
          <v-avatar size="35" class="mr-2">
            <v-img
              v-if="getSelectedTeam === null"
              src="https://media.api-sports.io/football/leagues/39.png"
            />
            <v-img v-else :src="getSelectedTeamLogo" />
          </v-avatar>
          <v-list-item-title>{{ getUser.username }}</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="handleLogout">
          <v-icon class="mr-3 ml-2" color="black">mdi-logout</v-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    value: Boolean,
  },
  name: "NavBar",
  methods: {
    ...mapMutations(["logout", "clearStore"]),
    handleLogout() {
      this.clearStore();
      this.logout();
    },
  },
  computed: {
    ...mapGetters([
      "getSelectedTeam",
      "getTeams",
      "getSelectedTeamLogo",
      "getUser",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.title-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.Arsenal-Nav {
  background-color: #ffffff !important;
}
.Villa-Nav {
  background-color: #670e36 !important;
}
.Bournemouth-Nav {
  background-color: #b50e12 !important;
}
.Brighton-Nav {
  background-color: #fdb913 !important;
}
.Brentford-Nav {
  background-color: #ffffff !important;
}
.Chelsea-Nav {
  background-color: #ffffff !important;
}
.Palace-Nav {
  background-color: #c4122e !important;
}
.Everton-Nav {
  background-color: #ffffff !important;
}
.Forest-Nav {
  background-color: #ffffff !important;
}
.Fulham-Nav {
  background-color: #cc0000 !important;
}
.Leicester-Nav {
  background-color: #ffffff !important;
}
.Liverpool-Nav {
  background-color: #d00027 !important;
}
.Leeds-Nav {
  background-color: #ffcd00 !important;
}
.City-Nav {
  background-color: #ffffff !important;
}
.United-Nav {
  background-color: #ffe500 !important;
}
.Newcastle-Nav {
  background-color: #ffffff !important;
}
.Southampton-Nav {
  background-color: #22b24c !important;
}
.Tottenham-Nav {
  background-color: #ffffff !important;
}
.Hammers-Nav {
  background-color: #2dafe5 !important;
}
.Wolves-Nav {
  background-color: #fdb913 !important;
}
</style>
