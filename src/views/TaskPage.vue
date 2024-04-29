<template>
  <div class="theme">
    <v-container style="width: 80%">
      <v-col>
        <v-card class="elevation-5 my-5">
          <v-card-title>Task Title</v-card-title>
          <v-card-text class="text">{{ task.title }}</v-card-text>
        </v-card>
        <v-divider></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>State</v-card-title>
          <v-card-text class="text">{{ task.state }}</v-card-text>
        </v-card>
        <v-divider></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Priority</v-card-title>
          <v-card-text class="text">{{ task.priority }}</v-card-text>
        </v-card>
        <v-divider></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Estimate Hours</v-card-title>
          <v-card-text class="text">{{ task.estimateHours }}</v-card-text>
        </v-card>
        <v-divider></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Description</v-card-title>
          <v-card-text class="text">{{ task.description }}</v-card-text>
        </v-card>
      </v-col>
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
        headers: [
          { text: "Task Title", value: "title" },
          { text: "State", value: "state" },
          { text: "Priority", value: "priority" },
          { text: "Estimate Hours", value: "estimateHours" },
          { text: "Description", value: "description" },
        ],
        task: {
          title: 'Task 1',
          id: '32317bad-1a12-4acb-aef7-86c5cc99b610',
          state: 'Done',
          priority: '99',
          estimateHours: '3',
          description: 'Description 1'
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