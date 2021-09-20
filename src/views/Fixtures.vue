<template>
  <div style="height: 100%" class="d-flex flex-column">
    <div class="d-flex justify-center">
      <h1 class="white--text">Fixtures</h1>
    </div>
    <div class="flex-grow-1"><FixturesTable /></div>
  </div>
</template>

<script>
  export default {
    name: "Fixtures",
    components: {
      FixturesTable: () => ({
        component: import("../components/fixtures/FixturesTable.vue"),
      }),
    },
  };
</script>

<style lang="scss" scoped></style>
