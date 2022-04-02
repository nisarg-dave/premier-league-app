<template>
  <v-card rounded color="razzmatazz" elevation="12" class="ma-3 pa-3">
    <h3 class="white--text text-center">Starting XIs</h3>
    <v-simple-table>
      <thead>
        <th>Home Team XI</th>
        <th>Away Team XI</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in startXIs" :key="index">
          <td class="text-center">{{ item.homePlayerName }}</td>
          <td class="text-center">{{ item.awayPlayerName }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <h3 class="white--text text-center">Subs</h3>
    <v-simple-table>
      <thead>
        <th>Home Team Subs</th>
        <th>Away Team Subs</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in subs" :key="index">
          <td class="text-center">{{ item.homePlayerName }}</td>
          <td class="text-center">{{ item.awayPlayerName }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  name: "LineUpsCard",
  computed: {
    startXIs() {
      const lineUpArr = [];
      for (let i = 0; i < this.lineUps.homeTeamXI.length; i++) {
        lineUpArr.push({
          homePlayerName: this.lineUps.homeTeamXI[i],
          awayPlayerName: this.lineUps.awayTeamXI[i],
        });
      }
      return lineUpArr;
    },
    subs() {
      const subsArr = [];
      for (let i = 0; i < this.lineUps.homeTeamSubs.length; i++) {
        subsArr.push({
          homePlayerName: this.lineUps.homeTeamSubs[i],
          awayPlayerName: this.lineUps.awayTeamSubs[i],
        });
      }
      return subsArr;
    },
  },
  props: {
    lineUps: Object,
  },
};
</script>

<style scoped>
.v-card {
  width: 25rem;
}
</style>