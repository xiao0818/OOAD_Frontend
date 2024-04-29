<template>
  <v-container>
    <v-row justify="space-around">
      <v-col>
        <h1>Backlog Item: {{ backlogItem.name }}</h1>
      </v-col>
      <v-col>
        <h1>Story Point: {{ backlogItem.storyPoint }}</h1>
      </v-col>
      <v-col>
        <h1>Importance: {{ backlogItem.importance }}</h1>
      </v-col>
      <v-col>
        <v-btn color="primary">Create Task</v-btn>
      </v-col>
    </v-row>
    <v-data-table :headers="headers" :items="tasks" @click:row="openTask" />
  </v-container>
</template>

<script>

  export default {
    name: "BacklogItemPage",
    components: {
    },
    data() {
      return {
        backlogItem: {
          name: 'Backlog Item 1',
          id: '6d039242-c8cb-4fc7-87e1-5732aa8df6ab',
          storyPoint: '3',
          importance: '99',
          acceptanceCriteria: 'Criteria 1'
        },
        headers: [
          { text: "Task Name", value: "name" },
          { text: "State", value: "state" },
          { text: "Priority", value: "priority" },
          { text: "Estimate Hours", value: "estimateHours" },
        ],
        tasks: [
          {
            name: 'Task 1',
            id: '32317bad-1a12-4acb-aef7-86c5cc99b610',
            state: 'Done',
            priority: '99',
            estimateHours: '3'
          },
          {
            name: 'Task 2',
            id: '3cb76c7f-b447-4005-a541-af493fec8c60',
            state: 'Doing',
            priority: '99',
            estimateHours: '1'
          },
          {
            name: 'Task 3',
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
        console.log(value.id)
        this.$router.push({ name: "Task", params: {id: value.id} });
      }
    }
  }
</script>

<style>
</style>
