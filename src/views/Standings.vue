<template>
  <!-- height 100% means take up 100% height of container -->
  <div style="height: 100%" class="d-flex flex-column">
    <div class="d-flex justify-center">
      <h1 class="white--text">Standings</h1>
    </div>
    <div class="flex-grow-1"><Table /></div>
  </div>
</template>

<script>
  export default {
    name: "Standings",
    components: {
      Table: () => ({ component: import("../components/standings/Table.vue") }),
    },
  };
</script>

<style lang="scss" scoped></style>
