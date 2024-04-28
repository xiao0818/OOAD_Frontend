<template>
  <div id="home">
    <v-container>
      <v-btn size="x-large" @click="login()">
        Log In
      </v-btn>
    </v-container>
  </div>
</template>
  
<script>
  
  export default {
    name: "Home",
    components: {
    },
    mounted() {
    },
    methods: {
      login() {
        this.$router.push({ name: "ProjectList", params: {} });
      },
    },
  };
</script>
  
<style>
  #home {
    background-image: url(https://mdn.mozillademos.org/files/11307/bubbles.png),
      linear-gradient(to bottom, rgba(34, 86, 155, 0.911), rgba(255, 255, 255, 0));
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: bottom right, left, right;
    font-family: monospace;
  }
</style>
  