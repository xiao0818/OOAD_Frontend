<template>
  <div class="theme">
    <v-container style="width: 80%">
      <v-row align="center">
        <v-card class="elevation-5 my-5">
          <v-card-title>Task Title</v-card-title>
          <v-card-text class="text">{{ task.title }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Priority</v-card-title>
          <v-card-text class="text">{{ task.priority }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>State</v-card-title>
          <v-card-text class="text">{{ task.state }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Estimate Hours</v-card-title>
          <v-card-text class="text">{{ task.hours }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Description</v-card-title>
          <v-card-text class="text">{{ task.description }}</v-card-text>
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
        task: {
          title: 'Task 1',
          id: '32317bad-1a12-4acb-aef7-86c5cc99b610',
          priority: 'CRITICAL',
          state: 'Done',
          hours: '3',
          description: 'Description 001'
        },
      }
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
</style>