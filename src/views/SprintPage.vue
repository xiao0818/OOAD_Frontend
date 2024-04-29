<template>
    <v-container>
      <v-row justify="space-around">
        <v-col>
          <h1>Sprint: {{ sprint.name }}</h1>
        </v-col>
        <v-col>
          <h1>Sprint Goal: {{ sprint.goal }}</h1>
        </v-col>
        <v-col>
          <v-btn color="primary">Select Backlog Item</v-btn>
        </v-col>
      </v-row>
      <v-data-table :headers="headers" :items="backlogItems" @click:row="openBacklogItem" />
    </v-container>
  </template>
  
  <script>
  
    export default {
      name: "SprintPage",
      components: {
      },
      data() {
        return {
          sprint: {
            name: 'Sprint 1',
            id: 'd11afa70-1f57-498e-94ef-6eb36ce08722',
            goal: 'Description 1',
            startDate: '2024/04/15',
            endDate: '2024/04/28'
          },
          headers: [
            { text: "Backlog Item Name", value: "name" },
            { text: "Story Point", value: "storyPoint" },
            { text: "Importance", value: "importance" },
            { text: "Acceptance Criteria", value: "acceptanceCriteria" },
          ],
          backlogItems: [
            {
              name: 'Backlog Item 1',
              id: '6d039242-c8cb-4fc7-87e1-5732aa8df6ab',
              storyPoint: '3',
              importance: '99',
              acceptanceCriteria: 'Criteria 1'
            },
            {
              name: 'Backlog Item 2',
              id: '1ba8c03a-4230-47b7-b876-1cb5a77c06bb',
              storyPoint: '5',
              importance: '99',
              acceptanceCriteria: 'Criteria 2'
            },
            {
              name: 'Backlog Item 3',
              id: 'eac3be3e-f8c3-4b47-b0f9-386367e7f221',
              storyPoint: '2',
              importance: '99',
              acceptanceCriteria: 'Criteria 3'
            },
          ],
        }
      },
      methods: {
        openBacklogItem(value) {
          console.log(value.id)
          this.$router.push({ name: "BacklogItem", params: {id: value.id} });
        }
      }
    }
  </script>
  
  <style>
  </style>
  