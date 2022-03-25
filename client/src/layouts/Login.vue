<template>
  <v-app>
    <v-main>
      <v-sheet class="sheet-colour" height="100%">
        <v-container>
          <v-row justify="center" align="center" style="height: 100vh">
            <v-col cols="6">
              <v-card color="aqua" class="pa-4">
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
                    outlined
                    required
                    color="black"
                    label="User Name"
                    :rules="nameRules"
                  />
                  <v-text-field
                    v-model="email"
                    outlined
                    required
                    color="black"
                    label="Email"
                    :rules="emailRules"
                  />
                  <v-text-field
                    v-model="password"
                    outlined
                    required
                    color="black"
                    label="Password"
                    :rules="passwordRules"
                  />
                  <div class="d-flex justify-space-between">
                    <v-btn color="error" class="black--text">Clear</v-btn>
                    <v-btn color="springGreen">Submit</v-btn>
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
};
</script>

<style lang="scss" scoped>
.sheet-colour {
  background: linear-gradient(45deg, #e90052 50%, #38003c 50%);
}
</style>