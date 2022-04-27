<template>
  <v-app-bar
    app
    dense
    flat
    hide-on-scroll
    :class="[getSelectedTeam !== null ? `${getSelectedTeam}` : 'springGreen']"
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
              getSelectedTeam !== null ? `${getSelectedTeam}` : 'springGreen',
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
          getSelectedTeam !== null ? `${getSelectedTeam}` : 'springGreen',
        ]"
      >
        <v-list-item>
          <v-avatar size="35" class="mr-2">
            <v-img src="https://media.api-sports.io/football/leagues/39.png" />
          </v-avatar>
          <v-list-item-title>Username</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="logout">
          <v-icon class="mr-3 ml-2" color="black">mdi-logout</v-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    value: Boolean,
  },
  name: "NavBar",
  methods: {
    logout() {
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapGetters(["getSelectedTeam"]),
  },
};
</script>

<style lang="scss" scoped>
.title-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.Arsenal {
  color: #ffffff;
}
.Villa {
  color: #670e36;
}
.Brighton {
  background-color: #fdb913;
}
.Brentford {
  background-color: #ffffff;
}
.Burnley {
  background-color: #97d9f6;
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
  background-color: #2dafe5;
}
.Wolves {
  background-color: #fdb913;
}
</style>
