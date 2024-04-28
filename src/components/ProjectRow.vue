<template>
  <v-container>
    <v-divider class="my-4"></v-divider>

  <v-row justify="space-between" align="center" class="pl-4">
    <v-col class="text-center">
      <v-btn class="ma-2" color="black" @click="openProject()">
        <v-icon icon="mdi-eye" size="large"></v-icon>
      </v-btn>
    </v-col>
    <v-col class="text-center">
      <h2>{{ item.name }}</h2>
    </v-col>
    <v-col class="text-center">
      <h5 class="text-h6 font-weight-bold">{{ item.po }}</h5>
    </v-col>
  </v-row>

  <v-divider class="my-4"></v-divider>
</v-container>
</template>

<script>
  export default {
    name: "ProjectRow",
    props: ["item"],
    methods: {
      openProject() {
        console.log(this.item.id);
        this.$router.push({ name: "Project", params: {} });
      }
    }
  }
</script>

<style>
</style>