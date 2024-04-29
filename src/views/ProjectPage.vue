<template>
  <div class="theme">
    <v-container style="width: 80%">
      <v-row align="center">
        <v-card class="elevation-5 my-5">
          <v-card-title>Project Name</v-card-title>
          <v-card-text class="text">{{ project.name }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Product Owner</v-card-title>
          <v-card-text class="text">{{ project.productOwner }}</v-card-text>
        </v-card>
        <v-spacer></v-spacer>
        <v-btn v-if="isProductBacklog" align-left color="primary" @click="OpenSprintList()">Sprint List</v-btn>
        <v-btn v-else align-left color="primary" @click="OpenProductBacklog()">Product Backlog</v-btn>
      </v-row>
      <v-data-table v-if="isProductBacklog" :headers="backlogItems_headers" :items="backlogItems" sort-by="name" class="elevation-5 my-5" @click:row="openBacklogItem">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Product Backlog</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn align-left color="primary">Create Backlog Item</v-btn>
          </v-toolbar>
        </template>
      </v-data-table>
      <v-data-table v-else :headers="sprints_headers" :items="sprints" sort-by="number" class="elevation-5 my-5" @click:row="openSprint">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Sprint List</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn align-left color="primary">Create Sprint</v-btn>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>

  export default {
    name: "ProjectPage",
    components: {
    },
    data() {
      return {
        isProductBacklog: true,
        project: {
          name: 'dcTrack',
          id: '1300717a-e3b7-49b4-9258-b3ab6027006d',
          productOwner: 'Sunbird'
        },
        backlogItems_headers: [
          { text: "Backlog Item Name", value: "name" },
          { text: "Acceptance Criteria", value: "acceptanceCriteria" },
        ],
        backlogItems: [
          {
            name: 'Product Backlog Item 1',
            id: '19d6c427-7d56-47e4-a5eb-37154f235d55',
            storyPoint: '',
            importance: '',
            acceptanceCriteria: 'Criteria 01'
          },
          {
            name: 'Product Backlog Item 2',
            id: '70ef56e4-09d8-4e6f-96ee-073414a3d61a',
            storyPoint: '',
            importance: '',
            acceptanceCriteria: 'Criteria 02'
          },
          {
            name: 'Product Backlog Item 3',
            id: 'bb2a0a5d-15af-41f3-ad02-b103e15845af',
            storyPoint: '',
            importance: '',
            acceptanceCriteria: 'Criteria 03'
          },
        ],
        sprints_headers: [
          { text: "Sprint Number", value: "number" },
          { text: "Time Interval", value: "timeInterval" },
          { text: "Start Date", value: "startDate" },
          { text: "End Date", value: "endDate" },
          { text: "Sprint Goal", value: "goal" },
        ],
        sprints: [
          {
            number: '1',
            id: 'd11afa70-1f57-498e-94ef-6eb36ce08722',
            timeInterval: '14',
            startDate: '2024/04/15',
            endDate: '2024/04/28',
            goal: 'Description 1'
          },
          {
            number: '2',
            id: 'c034ab9d-9f17-4046-9ae3-8eb0d153910f',
            timeInterval: '14',
            startDate: '2024/04/29',
            endDate: '2024/05/12',
            goal: 'Description 2'
          },
          {
            number: '3',
            id: '47b8ec71-3f56-4d5c-9419-84b8f9311bc3',
            timeInterval: '14',
            startDate: '2024/05/13',
            endDate: '2024/05/26',
            goal: 'Description 3'
          },
        ],
      }
    },
    methods: {
      OpenProductBacklog() {
        this.isProductBacklog = true;
      },
      OpenSprintList() {
        this.isProductBacklog = false;
        
      },
      openBacklogItem(value) {
        this.$router.push({ name: "BacklogItem", params: {projectId: this.$route.params.projectId, sprintId: '', backlogItemId: value.id} });
      },
      openSprint(value) {
        this.$router.push({ name: "Sprint", params: {projectId: this.$route.params.projectId, sprintId: value.id} });
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
