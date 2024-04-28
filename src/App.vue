<template>
  <v-app>
    <v-app-bar class="app-bar rounded-lg rounded-t-0"
      style="height: 8vh; position: fixed; z-index: 100"
      color="cyan lighten-4">
      <v-toolbar-title style="height: 8vh"></v-toolbar-title>
      <router-link to="/" class="toolbar-item">
        <v-img
          src="./assets/scrum.png"
          max-width="50"
          max-height="50"
        ></v-img>
      </router-link>
    </v-app-bar>
    <v-main>
      <div style="margin-top: 8vh"></div>
      <router-view style="height: 80vh"/>
      <Footer style="height: 12vh"/>
    </v-main>
  </v-app>
</template>

<script>
  import Footer from "./components/Footer";
  export default {
    name: "App",
    components: {
      Footer
    },
    mounted() {
    },
    methods: {
    },
  };
</script>

<style>
  .toolbar-item {
    text-decoration: none;
  }
</style>
