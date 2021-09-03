<template>
  <v-app>
    <v-main>
      <v-sheet color="razzmatazz" height="100%">
        <router-view />
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: "MainView",
  };
</script>

<style lang="scss" scoped></style>
