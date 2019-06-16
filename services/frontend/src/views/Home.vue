<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>
