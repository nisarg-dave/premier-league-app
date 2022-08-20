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
                      src="https://media.api-sports.io/football/leagues/39.png"
                      max-width="120"
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
                    v-if="checkbox"
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
                  <v-checkbox
                    v-model="checkbox"
                    required
                    color="black"
                    label="Not registered yet?"
                  />
                  <div class="d-flex justify-space-between">
                    <v-btn color="error" class="black--text" @click="clear"
                      >Clear</v-btn
                    >
                    <v-btn
                      v-if="checkbox"
                      color="springGreen"
                      @click="handleSubmit"
                      >Sign Up</v-btn
                    >
                    <v-btn v-else color="springGreen" @click="handleSubmit"
                      >Log In</v-btn
                    >
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      checkbox: false,
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
    ...mapActions(["signUp", "logIn"]),
    clear() {
      this.userName = "";
      this.email = "";
      this.password = "";
    },
    async handleSubmit() {
      // Sign Up
      if (this.checkbox) {
        const user = {
          userName: this.userName,
          email: this.email,
          password: this.password,
        };
        await this.signUp(user);
        if (this.getAuthErrors.length > 0) {
          alert(this.getAuthErrors[0].msg);
        } else {
          this.$router.push("/");
        }
      }
      // Else log in
      else {
        const user = {
          userName: this.userName,
          password: this.password,
        };
        await this.logIn(user);
        if (this.getAuthErrors.length > 0) {
          alert(this.getAuthErrors[0].msg);
        } else {
          this.$router.push("/");
        }
      }
    },
  },
  computed: {
    ...mapGetters(["getAuthErrors"]),
  },
};
</script>

<style lang="scss" scoped>
.sheet-colour {
  background: linear-gradient(45deg, #e90052 50%, #38003c 50%);
}
</style>
