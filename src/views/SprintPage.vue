<template>
    <v-container>
      <v-btn color="primary">Select Backlog Item</v-btn>
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
              storyPoint: 'Description 1',
              importance: '99',
              acceptanceCriteria: 'Criteria 1'
            },
            {
              name: 'Backlog Item 2',
              id: '1ba8c03a-4230-47b7-b876-1cb5a77c06bb',
              storyPoint: 'Description 2',
              importance: '99',
              acceptanceCriteria: 'Criteria 2'
            },
            {
              name: 'Backlog Item 3',
              id: 'eac3be3e-f8c3-4b47-b0f9-386367e7f221',
              storyPoint: 'Description 3',
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
  