<template>
  <div class="d-flex flex-column align-center">
    <h1 class="white--text text-center">Last 10 Fixtures</h1>
    <div v-for="fixture in getFixtures" :key="fixture.id">
      <FixtureCard
        :fixtureId="fixture.id"
        :homeTeam="fixture.homeTeamLogo"
        :homeGoals="fixture.homeTeamGoals"
        :awayTeam="fixture.awayTeamLogo"
        :awayGoals="fixture.awayTeamGoals"
        :location="fixture.location"
        :dateTime="fixture.date"
      />
    </div>
  </div>
</template>

<script>
import FixtureCard from "../components/fixtures/FixtureCard.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Fixtures",
  components: {
    FixtureCard,
  },
  methods: {
    ...mapActions(["fetchFixtures"]),
  },
  computed: {
    ...mapGetters(["getFixtures"]),
  },
  async created() {
    await this.fetchFixtures();
  },
};
</script>

<style lang="scss" scoped></style>
