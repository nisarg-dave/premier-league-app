<template>
  <div>
    <v-card color="aqua" class="pa-4">
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-center">Date</th>
            <th class="text-left">Home Team</th>
            <th class="text-center" />
            <th class="text-left">Away Team</th>
            <th class="text-center">Venue</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in fixtures" :key="item.fixture.id">
            <td class="text-center">{{ item.fixture.date }}</td>
            <td>
              <v-avatar size="36"><img :src="item.teams.home.logo" /></v-avatar>
              {{ item.teams.home.name }}
            </td>
            <td>
              {{ item.score.fulltime.home }}:{{ item.score.fulltime.away }}
            </td>
            <td>
              <v-avatar size="36"><img :src="item.teams.away.logo" /></v-avatar>
              {{ item.teams.away.name }}
            </td>
            <td class="text-center">{{ item.fixture.venue.name }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FixturesTable",
  props: {
    selectedRound: String,
  },
  data() {
    return {
      fixtures: [],
      round: 13,
    };
  },
  methods: {
    dateConverter(d) {
      const dateArr = d.split("/");
      return dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0];
    },
  },
  async created() {
    try {
      console.log(this.selectedRound);
      const { data } = await axios.get(
        `https://v3.football.api-sports.io/fixtures?league=39&season=2021&round=${this.selectedRound}`,
        {
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "cdb61658351d82c1a1a0764a715b7f7c",
          },
        }
      );
      console.log(data.response);
      this.fixtures = [...data.response];
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

<style lang="scss" scoped></style>
