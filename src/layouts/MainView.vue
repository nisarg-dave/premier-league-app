<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-sheet color="mardiGras" height="100%">
        <router-view />
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from "../components/navigation/NavBar.vue";
  export default {
    name: "MainView",
    components: { NavBar },
  };
</script>

<style lang="scss" scoped></style>
