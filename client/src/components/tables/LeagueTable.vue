<template>
  <v-card color="aqua" class="pa-4">
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-center">Position</th>
          <th class="text-center">Club</th>
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
        <tr v-for="team in getLeagueTable" :key="team.position">
          <td class="text-center">{{ team.position }}</td>
          <td>
            <v-avatar tile size="36"><img :src="team.clubLogo" /></v-avatar>
            {{ team.clubName }}
          </td>
          <td class="text-center">{{ team.played }}</td>
          <td class="text-center">{{ team.won }}</td>
          <td class="text-center">{{ team.drawn }}</td>
          <td class="text-center">{{ team.lost }}</td>
          <td class="text-center">{{ team.goalsFor }}</td>
          <td class="text-center">{{ team.goalsAgainst }}</td>
          <td class="text-center">{{ team.goalsDifference }}</td>
          <td class="text-center">{{ team.points }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LeagueTable",
  computed: {
    ...mapGetters(["getLeagueTable"]),
  },
};
</script>

<style lang="scss" scoped></style>
