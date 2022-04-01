<template>
  <v-card rounded ripple color="aqua" elevation="12" class="ma-3 pa-3">
    <div class="d-flex align-center justify-space-around">
      <v-avatar tile size="65"><v-img :src="homeTeam" /></v-avatar>
      <h2>{{ homeGoals }}</h2>
      <h3>-</h3>
      <h2>{{ awayGoals }}</h2>
      <v-avatar tile size="65"><v-img :src="awayTeam" /></v-avatar>
    </div>
    <div class="d-flex align-center flex-column">
      <h3>{{ location }}</h3>
      <h5>{{ date }}</h5>
      <h5>{{ time }}</h5>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "FixtureCard",
  props: {
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
        time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join(""); // return adjusted time or original string
    },
  },
};
</script>

<style  scoped>
.v-card {
  padding: 1rem auto;
  margin: 1.5rem auto;
  width: 25rem;
  min-height: 6rem;
}
</style>