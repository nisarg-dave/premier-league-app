<template>
  <div>
    <v-select
      v-model="selectedRound"
      dense
      filled
      label="Select Round"
      :items="rounds"
      class="aqua"
    />
    <v-btn class="aqua mt-2" @click="submitRound()"> Enter Round </v-btn>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "RoundSelect",
    data() {
      return {
        rounds: [],
        selectedRound: "",
      };
    },
    async created() {
      try {
        const { data } = await axios.get(
          `https://v3.football.api-sports.io/fixtures/rounds?league=39&season=2021`,
          {
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": "cdb61658351d82c1a1a0764a715b7f7c",
            },
          }
        );
        this.rounds = [...data.response];
      } catch (e) {
        this.errors.push(e);
      }
    },
    methods: {
      submitRound() {
        this.$emit("selectedRound", this.selectedRound);
      },
    },
  };
</script>

<style lang="scss" scoped></style>
