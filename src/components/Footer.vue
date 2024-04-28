<template>
  <v-footer dark padless>
    <v-card flat tile class="indigo lighten-1 white--text text-center">

      <v-card-text class="white--text pt-0">
        This Scrum platform is designed and developed for OOAD course in NTUT.
        All information and data from this platform are only for educational usages.
        If you are interested or this project provides you some support or inspiration,
        you can check out our source code.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        Copyright© <strong>Scrum</strong> — {{ currentYear }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
};
</script>

<style>
</style>