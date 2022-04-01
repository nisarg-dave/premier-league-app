<template>
  <div class="d-flex flex-column align-center">
    <div v-for="fixture in getFixtures" :key="fixture.location">
      <FixtureCard
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
