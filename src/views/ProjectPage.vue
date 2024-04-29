<template>
  <v-container>
    <v-btn color="primary">Create Sprint</v-btn>
    <v-data-table :headers="headers" :items="sprints" @click:row="openSprint" />
  </v-container>
</template>

<script>

  export default {
    name: "ProjectPage",
    components: {
    },
    data() {
      return {
        headers: [
          { text: "Sprint Number", value: "name" },
          { text: "Sprint Goal", value: "goal" },
          { text: "Start Date", value: "startDate" },
          { text: "End Date", value: "endDate" },
        ],
        sprints: [
          {
            name: 'Sprint 1',
            id: 'd11afa70-1f57-498e-94ef-6eb36ce08722',
            goal: 'Description 1',
            startDate: '2024/04/15',
            endDate: '2024/04/28'
          },
          {
            name: 'Sprint 2',
            id: 'c034ab9d-9f17-4046-9ae3-8eb0d153910f',
            goal: 'Description 2',
            startDate: '2024/04/29',
            endDate: '2024/05/12'
          },
          {
            name: 'Sprint 3',
            id: '47b8ec71-3f56-4d5c-9419-84b8f9311bc3',
            goal: 'Description 3',
            startDate: '2024/05/13',
            endDate: '2024/05/26'
          },
        ],
      }
    },
    methods: {
      openSprint(value) {
        console.log(value.id)
        this.$router.push({ name: "Sprint", params: {id: value.id} });
      }
    }
  }
</script>

<style>
</style>
