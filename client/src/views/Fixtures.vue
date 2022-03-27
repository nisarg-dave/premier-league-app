<template>
  <div style="height: 100%" class="d-flex flex-column">
    <div class="d-flex flex-row-reverse">
      <RoundSelect @selectedRound="selectRound" />
    </div>
    <div class="d-flex justify-center">
      <h1 class="white--text">Fixtures</h1>
    </div>
    <div class="flex-grow-1">
      <FixturesTable :selectedRound="selectedRound" :key="componentKey" />
    </div>
  </div>
</template>

<script>
  import RoundSelect from "../components/fixtures/RoundSelect.vue";
  export default {
    name: "Fixtures",
    data() {
      return {
        selectedRound: "",
        componentKey: 0,
      };
    },
    components: {
      FixturesTable: () => ({
        component: import("../components/fixtures/FixturesTable.vue"),
      }),
      RoundSelect,
    },
    methods: {
      selectRound(round) {
        this.selectedRound = round;
        this.componentKey++;
      },
    },
  };
</script>

<style lang="scss" scoped></style>
