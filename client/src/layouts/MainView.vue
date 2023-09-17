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
