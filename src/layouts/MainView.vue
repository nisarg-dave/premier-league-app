<template>
  <v-app>
    <NavBar v-model="showSide" />
    <SideBar v-model="showSide" />
    <v-main>
      <v-sheet color="mardiGras" height="100%" class="pa-4">
        <router-view />
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from "../components/navigation/NavBar.vue";
  import SideBar from "../components/navigation/SideBar.vue";
  export default {
    name: "MainView",
    components: { NavBar, SideBar },
    data() {
      return {
        showSide: false,
      };
    },
  };
</script>

<style lang="scss" scoped></style>
