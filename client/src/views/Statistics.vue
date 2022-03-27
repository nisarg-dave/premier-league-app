<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-center">
      <FixtureCard :fixtureId="fixtureId" />
    </div>
  </div>
</template>

<script>
  import FixtureCard from "../components/stats/FixtureCard.vue";
  export default {
    name: "Statistics",
    components: {
      FixtureCard,
    },
    data() {
      return {
        fixtureId: this.$route.params.fixtureId,
      };
    },
    mounted() {
      console.log(this.fixtureId);
    },
  };
</script>

<style lang="scss" scoped></style>
