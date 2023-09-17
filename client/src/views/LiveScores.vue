<template>
  <div class="d-flex flex-column align-center">
    <h1 class="white--text text-center">Live Scores</h1>
    <div v-if="getLiveScores.length === 0">
      <h2 class="white--text text-center mt-2">
        There are no live games at the moment. Please come back later.
      </h2>
    </div>
    <div v-else v-for="liveScore in getLiveScores" :key="liveScore.id">
      <FixtureCard
        :fixtureId="liveScore.id"
        :status="liveScore.status"
        :homeTeam="liveScore.homeTeamLogo"
        :homeGoals="liveScore.homeTeamGoals"
        :awayTeam="liveScore.awayTeamLogo"
        :awayGoals="liveScore.awayTeamGoals"
        :location="liveScore.location"
        :dateTime="liveScore.date"
      />
    </div>
  </div>
</template>

<script>
  import FixtureCard from "../components/fixtures/FixtureCard.vue";
  import { mapGetters, mapActions } from "vuex";
  export default {
    name: "LiveScores",
    components: {
      FixtureCard,
    },
    methods: {
      ...mapActions(["fetchLiveScores"]),
    },
    computed: {
      ...mapGetters(["getLiveScores"]),
    },
    async created() {
      await this.fetchLiveScores();
    },
  };
</script>

<style lang="scss" scoped></style>
