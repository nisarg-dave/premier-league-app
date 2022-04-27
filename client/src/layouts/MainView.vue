<template>
  <v-app>
    <NavBar v-model="showSide" />
    <SideBar v-model="showSide" />
    <v-main>
      <v-sheet
        height="100%"
        :class="[
          getSelectedTeam !== null
            ? `${getSelectedTeam} pa-4`
            : 'mardiGras pa-4',
        ]"
      >
        <router-view />
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "../components/navigation/NavBar.vue";
import SideBar from "../components/navigation/SideBar.vue";
import { mapGetters } from "vuex";
export default {
  name: "MainView",
  components: { NavBar, SideBar },
  data() {
    return {
      showSide: false,
    };
  },
  computed: {
    ...mapGetters(["getSelectedTeam"]),
  },
};
</script>

<style lang="scss" scoped>
.Arsenal {
  background-color: #ef0107;
}
.Villa {
  background-color: #95bfe5;
}
.Brighton {
  background-color: #005daa;
}
.Brentford {
  background-color: #e30613;
}
.Burnley {
  background-color: #630530;
}
.Chelsea {
  background-color: #034694;
}
.Palace {
  background-color: #1b458f;
}
.Everton {
  background-color: #274488;
}
.Leicester {
  background-color: #0053a0;
}
.Liverpool {
  background-color: #00a398;
}
.Leeds {
  background-color: #1d428a;
}
.City {
  background-color: #6caddf;
}
.United {
  background-color: #da020e;
}
.Newcastle {
  background-color: #000000;
}
.Norwich {
  background-color: #00a650;
}
.Southampton {
  background-color: #ed1a3b;
}
.Tottenham {
  background-color: #132257;
}
.Watford {
  background-color: #ed2127;
}
.Hammers {
  background-color: #7c2c3b;
}
.Wolves {
  background-color: #000000;
}
</style>
