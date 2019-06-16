<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->

    <v-app dark>
      <v-toolbar dark color="primary">
        <v-toolbar-title class="white--text">NodeJS sample messaging system</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn>
          Login
          <v-icon right dark>account_circle</v-icon>
        </v-btn>
      </v-toolbar>

      <v-content>
        <v-container>
          <h1>Demo application for technology and stack knowledge</h1>
          <span>DevHire LTD</span>
        </v-container>

        <v-container>
          <h2> Technologies used: </h2>
          <v-chip>Docker</v-chip>
          <v-chip>RabbitMQ</v-chip>
          <v-chip>NodeJS</v-chip>
          <v-chip>Socket.IO</v-chip>
          <v-chip>VueJS</v-chip>
          <v-chip>Vuetify</v-chip>
          <v-chip>Nginx</v-chip>
        </v-container>

        <v-container>
          <h2> Problems solved </h2>
          <v-chip>WebSockets load-balancing</v-chip>
          <v-chip>Sticky sessions</v-chip>
        </v-container>

        <v-container>
          <h2> Problems to solve </h2>
          <v-chip>Authentication</v-chip>
          <v-chip>Data persistence</v-chip>
        </v-container>
      </v-content>

      <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div>kamillo1888 &copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
</style>
