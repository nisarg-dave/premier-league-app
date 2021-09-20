<template>
  <v-navigation-drawer v-model="showSideBar" app floating color="springGreen">
    <v-list-item class="mt-1 ml-13 d-flex justify-space-around">
      <router-link to="/">
        <v-img
          src="https://media.api-sports.io/football/leagues/39.png"
          background-color="white"
          max-height="100"
          max-width="50"
          class
        />
      </router-link>
    </v-list-item>
    <v-list>
      <v-divider color="mardiGras" />
      <router-link style="text-decoration: none" :to="{ name: 'home' }">
        <v-list-item link>
          <v-icon color="black" class="ml-2">mdi-home</v-icon>
          <v-list-item-title class="ml-8 mt-2">Home</v-list-item-title>
        </v-list-item>
      </router-link>
      <v-divider color="mardiGras" />
      <router-link style="text-decoration: none" :to="{ name: 'standings' }">
        <v-list-item link>
          <v-icon color="black" class="ml-2">mdi-podium-gold</v-icon>
          <v-list-item-title class="ml-8 mt-2">Standings</v-list-item-title>
        </v-list-item>
      </router-link>
      <v-divider color="mardiGras" />
    </v-list>
    <!-- <v-col class="nav-buttons-wrapper mt-2">
          <v-btn
            depressed
            color="mardiGras"
            :to="{ name: 'standings' }"
            class="white--text nav-button mr-2"
            >Table</v-btn
          >
          <v-btn depressed color="mardiGras" class="white--text nav-button mr-2"
            >Live Scores</v-btn
          >
          <v-btn depressed color="mardiGras" class="white--text nav-button mr-2"
            >Fixtures</v-btn
          >
          <v-btn depressed color="mardiGras" class="white--text nav-button mr-2"
            >Transfers</v-btn
          >
        </v-col>
      </v-col> -->
  </v-navigation-drawer>
</template>

<script>
  export default {
    props: {
      value: Boolean,
    },
    name: "SideBar",
    computed: {
      showSideBar: {
        get() {
          return this.value;
        },
        set(value) {
          this.$emit("input", value);
        },
      },
    },
  };
</script>

<style scoped></style>
