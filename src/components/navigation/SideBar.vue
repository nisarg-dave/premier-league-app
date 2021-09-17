<template>
  <v-navigation-drawer
    v-model="showSideBar"
    app
    floating
    mini-variant
    color="springGreen"
    mini-variant-width="160"
  >
    <v-list-item class="mt-1">
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
      <router-link style="text-decoration: none" :to="{ name: 'standings' }">
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-icon color="black">{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </router-link>
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
    data() {
      return {
        items: [{ icon: "mdi-podium-gold", title: "Standings" }],
      };
    },
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
