<template>
  <div>
    <div class="d-flex justify-space-around">
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
