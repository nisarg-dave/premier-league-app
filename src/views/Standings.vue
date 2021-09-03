<template>
  <div class="flex-grow-1"><Table /></div>
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
