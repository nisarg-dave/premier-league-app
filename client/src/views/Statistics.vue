<template>
  <div class="d-flex flex-column align-center">
    <GameCard :fixture="getStats[0].fixture" />
    <div
      v-for="(goal, index) in getStats[0].goals"
      :key="index"
      class="goalscorers"
    >
      <div
        v-if="goal.team.name === getStats[0].fixture[0].homeTeamName"
        class="goalscorers-goals-home white--text"
      >
        ⚽️ {{ goal.player.name }}{{ " " }}{{ goal.time.elapsed }}'
      </div>
      <div
        v-else-if="goal.team.name === getStats[0].fixture[0].awayTeamName"
        class="d-flex goalscorers-goals-away white--text"
      >
        ⚽️ {{ goal.player.name }}{{ " " }}{{ goal.time.elapsed }}'
      </div>
    </div>
    <GameStatistics :gameStats="getStats[0].stats" />
    <LineUpsCard :lineUps="getStats[0].teamLineups" />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import GameCard from "../components/stats/GameCard.vue";
  import LineUpsCard from "../components/stats/LineupsCard.vue";
  import GameStatistics from "../components/stats/GameStatistics.vue";
  export default {
    name: "Statistics",
    computed: {
      ...mapGetters(["getStats"]),
    },
    components: {
      GameCard,
      LineUpsCard,
      GameStatistics,
    },
    methods: {
      ...mapActions(["fetchStats"]),
    },
    async created() {
      const { id } = this.$route.params;
      await this.fetchStats(id);
    },
  };
</script>

<style lang="scss" scoped>
  .goalscorers-goals-home {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .goalscorers-goals-away {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .goalscorers {
    width: 23rem;
    display: flex;
    font-weight: 700;
    font-size: 14px;
  }
</style>
