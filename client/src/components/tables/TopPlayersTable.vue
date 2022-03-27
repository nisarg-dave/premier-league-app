<template>
  <v-card color="aqua" class="pa-4">
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-center">Photo</th>
          <th class="text-center">Name</th>
          <th class="text-center">Team</th>
          <th class="text-center">Appearences</th>
          <th v-if="forAssists" class="text-center">Assists</th>
          <th v-else class="text-center">Goals</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="data in topPlayersData"
          :key="data.playerName"
          class="table-row"
        >
          <td class="text-center">
            <v-avatar size="100"><img :src="data.playerPhoto" /></v-avatar>
          </td>
          <td class="text-center">{{ data.playerName }}</td>
          <td class="text-center">
            <v-avatar tile size="80"><img :src="data.team" /></v-avatar>
          </td>
          <td class="text-center">{{ data.appearences }}</td>
          <td v-if="forAssists" class="text-center">{{ data.assists }}</td>
          <td v-else class="text-center">{{ data.goals }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TopPlayersTable",
  props: {
    forAssists: Boolean,
  },
  computed: {
    ...mapGetters(["getTopScorers", "getTopAssists"]),
    topPlayersData() {
      return this.forAssists ? this.getTopAssists : this.getTopScorers;
    },
  },
};
</script>

<style lang="scss" scoped>
.table-row {
  pointer-events: none;
}
</style>
