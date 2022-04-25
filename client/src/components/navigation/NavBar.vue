<template>
  <v-app-bar app dense flat hide-on-scroll color="springGreen">
    <v-col cols="auto">
      <v-app-bar-nav-icon color="black" @click="$emit('input', !value)" />
    </v-col>
    <v-col class="title-wrapper">
      <v-toolbar-title class="font-weight-black">The Prem</v-toolbar-title>
    </v-col>
    <v-divider vertical />
    <v-menu offset-y>
      <template v-slot:activator="{ on, sattrs }">
        <v-col cols="auto">
          <v-btn
            small
            depressed
            tile
            color="springGreen"
            v-bind="sattrs"
            v-on="on"
          >
            <v-icon>mdi-cog</v-icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </v-col>
      </template>
      <v-list color="springGreen">
        <v-list-item>
          <v-avatar size="35" class="mr-2">
            <v-img src="https://media.api-sports.io/football/leagues/39.png" />
          </v-avatar>
          <v-list-item-title>Username</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="logout">
          <v-icon class="mr-3 ml-2" color="black">mdi-logout</v-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
  name: "NavBar",
  methods: {
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.title-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
