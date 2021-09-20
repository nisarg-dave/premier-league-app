<template>
  <div>
    <v-card color="aqua" class="pa-4">
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-center">Date</th>
            <th class="text-left">Home Team</th>
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
    data() {
      return {
        fixtures: [],
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
        const todayDate = new Date();
        const newTodayDate = todayDate.toLocaleDateString();
        const formatedTodayDate = this.dateConverter(newTodayDate);
        let numberOfDaysToAdd = 7;
        let advancedDate = new Date();
        advancedDate.setDate(advancedDate.getDate() + numberOfDaysToAdd);
        const newAdvancedDate = advancedDate.toLocaleDateString();
        const formatedAdvancedDate = this.dateConverter(newAdvancedDate);
        const { data } = await axios.get(
          `https://v3.football.api-sports.io/fixtures?league=39&season=2021&from=${formatedTodayDate}&to=${formatedAdvancedDate}`,
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
