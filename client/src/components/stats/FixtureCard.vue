<template>
  <div>
    <v-card
      v-for="item in fixture"
      max-width="500"
      :key="item.fixture.id"
      class="aqua mx-auto"
    >
      <v-card-title> {{ item.fixture.venue.name }} </v-card-title>
      <v-card-subtitle>
        {{ item.fixture.date.substring(0, 10).split("-").reverse().join("/") }}
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FixtureCard",
  props: {
    fixtureId: Number,
  },
  data() {
    return {
      fixture: [],
    };
  },
  async created() {
    try {
      const { data } = await axios.get(
        `https://v3.football.api-sports.io/fixtures?id=${this.fixtureId}`,
        {
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "cdb61658351d82c1a1a0764a715b7f7c",
          },
        }
      );
      console.log(data.response);
      this.fixture = [...data.response];
      console.log(this.fixture);
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>