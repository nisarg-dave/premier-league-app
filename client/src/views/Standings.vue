<template>
  <div>
    <h1 class="text-center white--text">League Table</h1>
    <LeagueTable />
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    name: "Standings",
    components: {
      LeagueTable: () => ({
        component: import("../components/tables/LeagueTable.vue"),
      }),
    },
    methods: {
      ...mapActions(["fetchLeagueTable"]),
    },
    async created() {
      await this.fetchLeagueTable();
    },
  };
</script>

<style lang="scss" scoped></style>
