<template>
  <div class="theme">
    <v-container style="width: 80%">
      <v-row align="center">
        <v-card class="elevation-5 my-5">
          <v-card-title>Backlog Item</v-card-title>
          <v-card-text class="text">{{ backlogItem.name }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Story Point</v-card-title>
          <v-card-text class="text">{{ backlogItem.storyPoint }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Importance</v-card-title>
          <v-card-text class="text">{{ backlogItem.importance }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Acceptance Criteria</v-card-title>
          <v-card-text class="text">{{ backlogItem.acceptanceCriteria }}</v-card-text>
        </v-card>
      </v-row>
      <v-data-table :headers="headers" :items="tasks" sort-by="title" class="elevation-5 my-5" @click:row="openTask">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Task List</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn align-left color="primary">Create Task</v-btn>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>

  export default {
    name: "BacklogItemPage",
    components: {
    },
    data() {
      return {
        backlogItem: {
          name: 'Sprint Backlog Item 1',
          id: '6d039242-c8cb-4fc7-87e1-5732aa8df6ab',
          storyPoint: '3',
          importance: '99',
          acceptanceCriteria: 'Criteria 1'
        },
        headers: [
          { text: "Task Title", value: "title" },
          { text: "State", value: "state" },
          { text: "Priority", value: "priority" },
          { text: "Estimate Hours", value: "estimateHours" },
        ],
        tasks: [
          {
            title: 'Task 1',
            id: '32317bad-1a12-4acb-aef7-86c5cc99b610',
            state: 'Done',
            priority: '99',
            estimateHours: '3'
          },
          {
            title: 'Task 2',
            id: '3cb76c7f-b447-4005-a541-af493fec8c60',
            state: 'Doing',
            priority: '99',
            estimateHours: '1'
          },
          {
            title: 'Task 3',
            id: '961cb3e2-cbe3-4a4e-8760-16b00af30a25',
            state: 'Todo',
            priority: '99',
            estimateHours: '2'
          },
        ],
      }
    },
    methods: {
      openTask(value) {
        this.$router.push({ name: "Task", params: {projectId: this.$route.params.projectId, sprintId: this.$route.params.sprintId, backlogItemId: this.$route.params.backlogItemId, taskId: value.id} });
      }
    }
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
