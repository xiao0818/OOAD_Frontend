<template>
  <div class="theme">
    <v-container style="width: 80%">
      <v-row align="center">
        <v-card class="elevation-5 my-5">
          <v-card-title>Task Title</v-card-title>
          <v-card-text class="text">{{ this.task.title }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Priority</v-card-title>
          <v-card-text class="text">{{ this.task.priority }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>State</v-card-title>
          <v-card-text class="text">{{ this.task.state }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5" @mouseover="changeCursor(true)" @mouseleave="changeCursor(false)" :class="{ 'clickable': isHovered }">
          <v-card-title>Estimate Hours</v-card-title>
          <v-card-text class="text">{{ this.task.hours }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Description</v-card-title>
          <v-card-text class="text">{{ this.task.description }}</v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>

  export default {
    name: "TaskPage",
    components: {
    },
    data() {
      return {
        isHovered: false,
        task: this.$route.params.task,
      }
    },
    methods: {
      changeCursor(value) {
        this.isHovered = value;
      },
    },
  }
</script>

<style>
  .theme {
    background-image: linear-gradient(to bottom, rgb(50, 155, 165), rgba(255, 255, 255, 0));
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: bottom right, left, right;
  }

  .text {
    font-size: large;
    color: #000;
  }

  .clickable {
    cursor: pointer;
  }
</style>