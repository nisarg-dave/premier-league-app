<template>
  <v-app-bar app flat color="springGreen">
    <v-row>
      <v-col cols="auto">
        <v-img
          src="https://media.api-sports.io/football/leagues/39.png"
          background-color="white"
          max-height="100"
          max-width="50"
          class
      /></v-col>
      <v-col class="nav-buttons-wrapper mt-2">
        <v-btn depressed color="mardiGras" class="white--text nav-button mr-2"
          >Table</v-btn
        >
        <v-btn depressed color="mardiGras" class="white--text nav-button mr-2"
          >Hello</v-btn
        >
        <v-btn depressed color="mardiGras" class="white--text nav-button mr-2"
          >Hello</v-btn
        >
        <v-btn depressed color="mardiGras" class="white--text nav-button mr-2"
          >Hello</v-btn
        >
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
  export default {
    name: "NavBar",
  };
</script>

<style lang="scss" scoped>
  .nav-button {
    width: 24%;
  }
  .nav-buttons-wrapper {
    width: 100%;
  }
</style>
