import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        mardiGras: "#38003C",
        springGreen: "#00FF85",
        razzmatazz: "#E90052",
        aqua: "#04F5FF",
      },
    },
  },
});
