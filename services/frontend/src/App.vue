<template>
  <div id="app">
    <v-app dark>
      <v-toolbar dark color="primary">
        <v-toolbar-title class="white--text">NodeJS sample messaging system</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn @click="auth">
          Login
          <v-icon right dark>account_circle</v-icon>
        </v-btn>
      </v-toolbar>

      <v-content>
        <router-view />
      </v-content>

      <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div><a href="https://github.com/kamillo1888">kamillo1888</a> &copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    auth: function() {
      this.$router.push('authenticate')
    }
  }
}
</script>

<style lang="scss">
</style>
