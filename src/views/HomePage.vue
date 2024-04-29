<template>
  <div>
    <v-container>
      <v-btn color="primary" style="margin-top: 40vh" @click="login()">
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
</style>
  