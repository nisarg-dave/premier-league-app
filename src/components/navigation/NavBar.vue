<template>
  <v-app-bar app dense flat hide-on-scroll color="springGreen">
    <v-col cols="auto">
      <v-app-bar-nav-icon color="black" @click="$emit('input', !value)" />
    </v-col>
    <v-col class="d-flex justify-space-around">
      <v-toolbar-title class="black--text">The Prem</v-toolbar-title>
    </v-col>
  </v-app-bar>
</template>

<script>
  export default {
    props: {
      value: Boolean,
    },
    name: "NavBar",
  };
</script>

<style lang="scss" scoped></style>
