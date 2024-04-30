<template>
  <div class="theme">
    <v-container style="width: 80%">
      <v-row align="center">
        <v-card class="elevation-5 my-5">
          <v-card-title>Sprint Number</v-card-title>
          <v-card-text class="text">{{ sprint.number }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Time Interval</v-card-title>
          <v-card-text class="text">{{ sprint.timeInterval }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Start Date</v-card-title>
          <v-card-text class="text">{{ sprint.startDate }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>End Date</v-card-title>
          <v-card-text class="text">{{ sprint.endDate }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Sprint Goal</v-card-title>
          <v-card-text class="text">{{ sprint.goal }}</v-card-text>
        </v-card>
      </v-row>
      <v-data-table :headers="sprintBacklog_headers" :items="sprintBacklogItems" sort-by="name" class="elevation-5 my-5" @click:row="openBacklogItem">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Sprint Backlog</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <!-- select backlog item dialog -->
            <v-dialog v-model="dialog" max-width="500px" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">Select Backlog Item</v-btn>
              </template>
              <!-- select backlog item card -->
              <v-form ref="form">
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Select Backlog Item</span>
                  </v-card-title>
                  <v-data-table :headers="productBacklog_headers" :items="productBacklogItems" sort-by="name" class="elevation-5 my-5">
                    <template v-slot:top>
                      <v-toolbar flat>
                        <v-toolbar-title>Product Backlog</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                      </v-toolbar>
                    </template>
                    <template v-slot:[`item.actions`]="{ item }">
                      <v-btn color="primary" @click="moveBacklogItemIntoSprintBacklog(item)"> Move Into Sprint Backlog </v-btn>
                    </template>
                  </v-data-table>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="close(); resetDataTableInDialog()">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </v-form>
            </v-dialog>
            <!-- end of select backlog item dialog -->
          </v-toolbar>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>
  
<script>

  export default {
    name: "SprintPage",
    components: {
    },
    data() {
      return {
        dialog: false,
        sprint: {
          id: 'd11afa70-1f57-498e-94ef-6eb36ce08722',
          number: '1',
          timeInterval: '14',
          startDate: '2024/04/15',
          endDate: '2024/04/28',
          goal: 'Description 1'
        },
        productBacklog_headers: [
          { text: "Backlog Item Name", value: "name" },
          { text: "Actions", value: "actions", sortable: false },
        ],
        productBacklogItems: [
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
        sprintBacklog_headers: [
          { text: "Backlog Item Name", value: "name" },
          { text: "Story Point", value: "storyPoint" },
          { text: "Importance", value: "importance" },
          { text: "Acceptance Criteria", value: "acceptanceCriteria" },
        ],
        sprintBacklogItems: [
          {
            name: 'Sprint Backlog Item 1',
            id: '6d039242-c8cb-4fc7-87e1-5732aa8df6ab',
            storyPoint: '3',
            importance: '99',
            acceptanceCriteria: 'Criteria 1'
          },
          {
            name: 'Sprint Backlog Item 2',
            id: '1ba8c03a-4230-47b7-b876-1cb5a77c06bb',
            storyPoint: '5',
            importance: '99',
            acceptanceCriteria: 'Criteria 2'
          },
          {
            name: 'Sprint Backlog Item 3',
            id: 'eac3be3e-f8c3-4b47-b0f9-386367e7f221',
            storyPoint: '2',
            importance: '99',
            acceptanceCriteria: 'Criteria 3'
          },
        ],
      }
    },
    watch: {
      dialog(val) {
        val || this.close();
      },
    },
    methods: {
      openBacklogItem(value) {
        console.log(value)
        this.$router.push({ name: "BacklogItem", params: {projectId: this.$route.params.projectId, sprintId: this.$route.params.sprintId, backlogItemId: value.id} });
      },
      async moveBacklogItemIntoSprintBacklog(item) {
        // await moveBacklogItem(
        //   this.newProject.projectName,
        //   this.newProject.productOwner
        // );
        console.log(item);
        await this.refresh();
      },
      resetDataTableInDialog() {
        // todo
        this.$refs.form.reset();
      },
      async refresh() {
        // this.projects = await getAllProjects();
      },
      async close() {
        this.dialog = false;
        await this.refresh();
      },
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
