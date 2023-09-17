<template>
  <v-card rounded color="razzmatazz" elevation="12" class="ma-3 pa-3">
    <div class="d-flex align-center justify-space-around">
      <v-avatar tile size="65"
        ><v-img :src="fixture[0].homeTeamLogo"
      /></v-avatar>
      <h2 class="white--text">{{ fixture[0].homeTeamGoals }}</h2>
      <h3 class="white--text">-</h3>
      <h2 class="white--text">{{ fixture[0].awayTeamGoals }}</h2>
      <v-avatar tile size="65"
        ><v-img :src="fixture[0].awayTeamLogo"
      /></v-avatar>
    </div>
    <div class="d-flex align-center flex-column">
      <h3 class="white--text mt-2">{{ fixture[0].location }}</h3>
      <h5 class="white--text">{{ date }}</h5>
    </div>
  </v-card>
</template>

<script>
  export default {
    name: "GameCard",
    props: {
      fixture: Array,
    },
    computed: {
      date() {
        const dt = new Date(this.fixture[0].date);
        return dt.toDateString(dt);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .v-card {
    width: 25rem;
  }
</style>
