<template>
  <v-card color="aqua" class="pa-4">
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-center">Position</th>
          <th class="text-left">Club</th>
          <th class="text-center">Played</th>
          <th class="text-center">Won</th>
          <th class="text-center">Drawn</th>
          <th class="text-center">Lost</th>
          <th class="text-center">Goals For</th>
          <th class="text-center">Goals Against</th>
          <th class="text-center">Goals Difference</th>
          <th class="text-center">Points</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in standings" :key="item.rank">
          <td class="text-center">{{ item.rank }}</td>
          <td>
            <v-avatar size="36"><img :src="item.team.logo" /></v-avatar>
            {{ item.team.name }}
          </td>
          <td class="text-center">{{ item.all.played }}</td>
          <td class="text-center">{{ item.all.win }}</td>
          <td class="text-center">{{ item.all.draw }}</td>
          <td class="text-center">{{ item.all.lose }}</td>
          <td class="text-center">{{ item.all.goals.for }}</td>
          <td class="text-center">{{ item.all.goals.against }}</td>
          <td class="text-center">{{ item.goalsDiff }}</td>
          <td class="text-center">{{ item.points }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
  import axios from "axios";
  export default {
    name: "Table",
    data() {
      return {
        errors: [],
        standings: [],
      };
    },
    async created() {
      try {
        const { data } = await axios.get(
          "https://v3.football.api-sports.io/standings?league=39&season=2021",
          {
            headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": "cdb61658351d82c1a1a0764a715b7f7c",
            },
          }
        );
        this.standings = [...data.response[0].league.standings[0]];
      } catch (e) {
        this.errors.push(e);
      }
    },
  };
</script>

<style lang="scss" scoped></style>
