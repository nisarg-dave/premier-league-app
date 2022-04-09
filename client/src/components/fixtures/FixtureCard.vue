<template>
  <v-card
    rounded
    color="razzmatazz"
    elevation="12"
    class="ma-3 pa-3"
    @click="toStats"
  >
    <div class="d-flex align-center justify-space-around">
      <v-avatar tile size="65"><v-img :src="homeTeam" /></v-avatar>
      <h2 class="white--text">{{ homeGoals }}</h2>
      <h3 class="white--text">-</h3>
      <h2 class="white--text">{{ awayGoals }}</h2>
      <v-avatar tile size="65"><v-img :src="awayTeam" /></v-avatar>
    </div>
    <div class="d-flex align-center flex-column">
      <h5 class="white--text mb-2">{{ status }}'</h5>
      <h3 class="white--text">{{ location }}</h3>
      <h5 class="white--text">{{ date }}</h5>
      <h5 class="white--text">{{ time }}</h5>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "FixtureCard",
  props: {
    fixtureId: Number,
    status: String,
    homeTeam: String,
    homeGoals: Number,
    awayTeam: String,
    awayGoals: Number,
    location: String,
    dateTime: String,
  },
  computed: {
    date() {
      const dt = new Date(this.dateTime);
      return dt.toDateString(dt);
    },
    time() {
      const dt = new Date(this.dateTime);
      return this.tConvert(dt.toLocaleTimeString(dt));
    },
  },
  methods: {
    tConvert(time) {
      // Check correct time format and split into components
      time = time
        .toString()
        .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if (time.length > 1) {
        // If time format correct
        time = time.slice(1); // Remove full string match value
        time.pop();
        time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join(""); // return adjusted time or original string
    },
    toStats() {
      this.$router.push({ name: "statistics", params: { id: this.fixtureId } });
    },
  },
};
</script>

<style  scoped>
.v-card {
  width: 25rem;
}
</style>