<template>
  <v-container>
    <v-col>
      <v-card>
        <v-card-item>
          <v-card-title>Task Name</v-card-title>
        </v-card-item>
        <v-card-text>{{ task.name }}</v-card-text>
      </v-card>
      <v-divider></v-divider>
      <v-card>
      <v-card-item>
        <v-card-title>State</v-card-title>
        </v-card-item>
        <v-card-text>{{ task.state }}</v-card-text>
      </v-card>
      <v-divider></v-divider>
      <v-card>
        <v-card-item>
          <v-card-title>Priority</v-card-title>
        </v-card-item>
        <v-card-text>{{ task.priority }}</v-card-text>
      </v-card>
      <v-divider></v-divider>
      <v-card>
        <v-card-item>
          <v-card-title>Estimate Hours</v-card-title>
        </v-card-item>
        <v-card-text>{{ task.estimateHours }}</v-card-text>
      </v-card>
      <v-divider></v-divider>
      <v-card>
        <v-card-item>
          <v-card-title>Description</v-card-title>
        </v-card-item>
        <v-card-text>{{ task.description }}</v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>

  export default {
    name: "TaskPage",
    components: {
    },
    data() {
      return {
        headers: [
          { text: "Task Name", value: "name" },
          { text: "State", value: "state" },
          { text: "Priority", value: "priority" },
          { text: "Estimate Hours", value: "estimateHours" },
          { text: "Description", value: "description" },
        ],
        task: {
          name: 'Task 1',
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
</style>