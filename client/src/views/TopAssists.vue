<template>
  <div>
    <h1 class="white--text text-center">Top Assists</h1>
    <TopPlayersTable :forAssists="true" />
  </div>
</template>

<script>
  import TopPlayersTable from "../components/tables/TopPlayersTable.vue";
  import { mapActions } from "vuex";

  export default {
    name: "TopAssists",
    components: {
      TopPlayersTable,
    },
    methods: {
      ...mapActions(["fetchTopAssists"]),
    },
    async created() {
      await this.fetchTopAssists();
    },
  };
</script>

<style lang="scss" scoped></style>
