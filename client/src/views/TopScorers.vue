<template>
  <div>
    <h1 class="white--text text-center">Top Scorers</h1>
    <TopPlayersTable :forAssists="false" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TopPlayersTable from "../components/tables/TopPlayersTable.vue";
export default {
  name: "TopScorers",
  components: {
    TopPlayersTable,
  },
  methods: {
    ...mapActions(["fetchTopScorers"]),
  },
  async created() {
    await this.fetchTopScorers();
  },
};
</script>

<style lang="scss" scoped></style>
