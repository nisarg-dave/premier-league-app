<template>
  <v-app>
    <v-main>
      <v-sheet class="sheet-colour" height="100%">
        <v-container>
          <v-row justify="center" align="center" style="height: 100vh">
            <v-col cols="6">
              <v-card lazy-validation ref="form" color="aqua" class="pa-4">
                <v-form>
                  <div class="d-flex justify-center">
                    <v-img
                      src="https://www.iradio.ie/wp-content/uploads/2018/05/premier-league-logo-2017-blue-newcastle-united-nufc-bw-650x400.jpg"
                      max-width="231"
                    />
                  </div>
                  <h1 class="text-center">The Prem</h1>
                  <v-text-field
                    v-model="userName"
                    flat
                    dense
                    solo
                    outlined
                    required
                    background-color="aqua"
                    color="black"
                    label="User Name"
                    :rules="userNameRules"
                  />
                  <v-text-field
                    v-model="email"
                    flat
                    dense
                    solo
                    outlined
                    required
                    background-color="aqua"
                    color="black"
                    label="Email"
                    :rules="emailRules"
                  />
                  <v-text-field
                    v-model="password"
                    flat
                    dense
                    solo
                    outlined
                    required
                    background-color="aqua"
                    color="black"
                    label="Password"
                    :rules="passwordRules"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                  />
                  <div class="d-flex justify-space-between">
                    <v-btn color="error" class="black--text" @click="clear"
                      >Clear</v-btn
                    >
                    <v-btn color="springGreen" @click="submit">Submit</v-btn>
                  </div>
                </v-form>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: true,
      showPassword: false,
      userName: "",
      email: "",
      password: "",
      userNameRules: [
        (v) => !!v || "Name is required",
        (v) =>
          (v && v.length <= 15) || "User Name must be less than 15 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length <= 15) || "Password must be less than 15 characters",
      ],
    };
  },
  methods: {
    clear() {
      this.userName = "";
      this.email = "";
      this.password = "";
    },
    submit() {
      if (this.user) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sheet-colour {
  background: linear-gradient(45deg, #e90052 50%, #38003c 50%);
}
</style>