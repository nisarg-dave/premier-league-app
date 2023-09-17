<template>
  <v-card rounded color="razzmatazz" elevation="12" class="ma-3 pa-3">
    <h3 class="white--text text-center mb-2">Game Statistics</h3>
    <h4 class="white--text text-center">Possession</h4>
    <div class="d-flex">
      <v-progress-linear
        value="100"
        height="20"
        class="white--text"
        color="mardiGras"
      >
        {{ gameStats.homeTeamPossession }}
      </v-progress-linear>
      <v-progress-linear
        value="100"
        height="20"
        class="white--text"
        color="mardiGras"
      >
        {{ gameStats.awayTeamPossession }}</v-progress-linear
      >
    </div>
    <h4 class="white--text text-center mt-1">Shots On Target</h4>
    <div class="d-flex">
      <v-progress-linear
        value="100"
        height="20"
        class="white--text"
        color="mardiGras"
      >
        {{ gameStats.homeTeamShotsOnTarget }}
      </v-progress-linear>
      <v-progress-linear
        value="100"
        height="20"
        color="mardiGras"
        class="white--text"
      >
        {{ gameStats.awayTeamShotsOnTarget }}</v-progress-linear
      >
    </div>
    <h4 class="white--text text-center mt-1">Total Shots</h4>
    <div class="d-flex">
      <v-progress-linear
        value="100"
        height="20"
        color="mardiGras"
        class="white--text"
      >
        {{ gameStats.homeTeamToalShots }}
      </v-progress-linear>
      <v-progress-linear
        value="100"
        height="20"
        color="mardiGras"
        class="white--text"
      >
        {{ gameStats.awayTeamToalShots }}</v-progress-linear
      >
    </div>
    <h4 class="white--text text-center mt-1">Fouls</h4>
    <div class="d-flex">
      <v-progress-linear
        value="100"
        height="20"
        color="mardiGras"
        class="white--text"
      >
        {{ gameStats.homeTeamFouls }}
      </v-progress-linear>
      <v-progress-linear
        value="100"
        height="20"
        color="mardiGras"
        class="white--text"
        colour=""
      >
        {{ gameStats.awayTeamFouls }}</v-progress-linear
      >
    </div>
    <h4 class="white--text text-center mt-1">Corners</h4>
    <div class="d-flex">
      <v-progress-linear
        value="100"
        height="20"
        color="mardiGras"
        class="white--text"
      >
        {{ gameStats.homeCorners }}
      </v-progress-linear>
      <v-progress-linear
        value="100"
        height="20"
        color="mardiGras"
        class="white--text"
      >
        {{ gameStats.awayCorners }}</v-progress-linear
      >
    </div>
  </v-card>
</template>

<script>
  export default {
    name: "GameStatistics",
    props: {
      gameStats: Object,
    },
  };
</script>

<style lang="scss" scoped>
  .v-card {
    width: 25rem;
  }
</style>
