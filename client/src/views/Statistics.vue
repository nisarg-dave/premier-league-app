<template>
  <div class="d-flex flex-column align-center">
    <GameCard :fixture="getStats[0].fixture" />
    <LineUpsCard :lineUps="getStats[0].teamLineups" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import GameCard from "../components/stats/GameCard.vue";
import LineUpsCard from "../components/stats/LineupsCard.vue";
export default {
  name: "Statistics",
  computed: {
    ...mapGetters(["getStats"]),
  },
  components: {
    GameCard,
    LineUpsCard,
  },
  methods: {
    ...mapActions(["fetchStats"]),
  },
  async created() {
    const { id } = this.$route.params;
    console.log(id);
    await this.fetchStats(id);
  },
};
</script>

<style lang="scss" scoped></style>
