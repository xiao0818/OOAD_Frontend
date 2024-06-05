<template>
  <div class="theme">
    <v-container style="width: 80%">
      <v-row align="center">
        <v-card class="elevation-5 my-5">
          <v-card-title>Project Name</v-card-title>
          <v-card-text class="text">{{ this.project.name }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Product Owner</v-card-title>
          <v-card-text class="text">{{ this.project.productOwner }}</v-card-text>
        </v-card>
      </v-row>
      <v-tabs class="elevation-5 my-5" >
        <v-tab>Product Backlog</v-tab>
        <v-tab>Sprint List</v-tab>
        <v-tab-item>
          <v-data-table :headers="backlogItems_headers" :items="project.productBacklog" sort-by="name" class="elevation-5 my-5" @click:row="openBacklogItem">
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Product Backlog</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <!-- create backlog item dialog -->
                <v-dialog v-model="createBacklogItemDialog" max-width="500px" persistent>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">Create Backlog Item</v-btn>
                  </template>
                  <!-- create backlog item -->
                  <v-form ref="form">
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">Create Backlog Item</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" md="6">
                              <v-text-field
                                v-model="newBacklogItem.name"
                                label="Backlog Item Name*"
                                type="text"
                                :rules="nameRule"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-text-field
                                v-model="newBacklogItem.storyPoint"
                                label="Story Point"
                                type="number"
                                :rules="storyPointRule"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-text-field
                                v-model="newBacklogItem.importance"
                                label="Importance*"
                                type="number"
                                :rules="importanceRule"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12">
                              <v-text-field
                                v-model="newBacklogItem.acceptanceCriteria"
                                label="Acceptance Criteria*"
                                type="text"
                                :rules="acceptanceCriteriaRule"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="close(); reset();">Cancel</v-btn>
                        <v-btn color="primary" text @click="saveBacklogItem(); reset();">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-form>
                </v-dialog>
                <!-- end of backlog item dialog -->
              </v-toolbar>
            </template>
          </v-data-table>
        </v-tab-item>
        <v-tab-item>
          <v-data-table :headers="sprints_headers" :items="project.sprintList" sort-by="number" class="elevation-5 my-5" @click:row="openSprint">
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Sprint List</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <!-- create sprint dialog -->
                <v-dialog v-model="createSprintDialog" max-width="500px" persistent>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">Create Sprint</v-btn>
                  </template>
                  <!-- create sprint -->
                  <v-form ref="form">
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">Create Sprint</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" md="6">
                              <v-text-field
                                v-model="newSprint.timeInterval"
                                label="Time Interval*"
                                type="number"
                                :rules="acceptanceCriteriaRule"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-text-field
                                v-model="newSprint.startDate"
                                label="StartDate*"
                                type="date"
                                :rules="acceptanceCriteriaRule"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12">
                              <v-text-field
                                v-model="newSprint.goal"
                                label="Sprint Goal*"
                                type="text"
                                :rules="acceptanceCriteriaRule"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="close(); reset();">Cancel</v-btn>
                        <v-btn color="primary" text @click="saveSprint(); reset();">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-form>
                </v-dialog>
                <!-- end of sprint dialog -->
              </v-toolbar>
            </template>
          </v-data-table>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
import { CreateBacklogItem, CreateSprint } from '../api/projectApi';

  export default {
    name: "ProjectPage",
    components: {
    },
    data() {
      return {
        createBacklogItemDialog: false,
        createSprintDialog: false,
        nameRule: [
          (v) => !!v || "Field cannot be empty.",
        ],
        storyPointRule: [
          // (v) => /^\d+$/.test(v) || "Field can only contain numbers.",
        ],
        importanceRule: [
          (v) => /^\d+$/.test(v) || "Field can only contain numbers.",
        ],
        acceptanceCriteriaRule: [
          (v) => !!v || "Field cannot be empty.",
        ],
        timeIntervalRule: [
          (v) => !!v || "Field cannot be empty.",
        ],
        startDateRule: [
          (v) => !!v || "Field cannot be empty.",
        ],
        goalRule: [
          (v) => !!v || "Field cannot be empty.",
        ],
        newBacklogItem: {
          name: null,
          storyPoint: null,
          importance: null,
          acceptanceCriteria: null
        },
        defaultBacklogItem: {
          name: null,
          storyPoint: null,
          importance: null,
          acceptanceCriteria: null
        },
        newSprint: {
          timeInterval: null,
          startDate: null,
          goal: null
        },
        defaultSprint: {
          timeInterval: null,
          startDate: null,
          goal: null
        },
        backlogItems_headers: [
          { text: "Backlog Item Name", value: "name" },
          { text: "Acceptance Criteria", value: "acceptanceCriteria" },
        ],
        sprints_headers: [
          { text: "Sprint Number", value: "number" },
          { text: "Time Interval", value: "timeInterval" },
          { text: "Start Date", value: "startDate" },
          { text: "End Date", value: "endDate" },
          { text: "Sprint Goal", value: "goal" },
        ],
        project: this.$route.params.project,
      }
    },
    watch: {
      createBacklogItemDialog(val) {
        val || this.close();
      },
      createSprintDialog(val) {
        val || this.close();
      },
    },
    methods: {
      OpenProductBacklog() {
        this.isProductBacklog = true;
      },
      OpenSprintList() {
        this.isProductBacklog = false;
      },
      openBacklogItem(value) {
        this.$router.push({ name: "BacklogItem", params: {projectId: this.$route.params.projectId, sprintId: '', backlogItemId: value.id, backlogItem: value} });
      },
      openSprint(value) {
        this.$router.push({ name: "Sprint", params: {projectId: this.$route.params.projectId, sprintId: value.id, sprint: value, productBacklog: this.project.productBacklog} });
      },
      reset() {
        this.$refs.form.reset();
      },
      async refresh() {
        // this.projects = await GetAllProjects();
      },
      close() {
        this.createBacklogItemDialog = false;
        this.createSprintDialog = false;
        this.$nextTick(() => {
          this.newBacklogItem = Object.assign({}, this.defaultBacklogItem);
          this.newSprint = Object.assign({}, this.defaultSprint);
        });
      },
      async saveBacklogItem() {
        if (this.newBacklogItem.storyPoint == null){
          this.newBacklogItem.storyPoint = 0
        }
        var response = await CreateBacklogItem(
          this.project.id,
          this.newBacklogItem.name,
          this.newBacklogItem.storyPoint,
          this.newBacklogItem.importance,
          this.newBacklogItem.acceptanceCriteria,
        );
        this.project.productBacklog.push(response);
        await this.refresh();
        this.close();
      },
      async saveSprint() {
        var response = await CreateSprint(
          this.project.id,
          this.project.sprintList.length + 1,
          this.newSprint.goal,
          this.newSprint.timeInterval,
          this.newSprint.startDate,
          this.addDays(this.newSprint.startDate, this.newSprint.timeInterval),
        );
        this.project.sprintList.push(response);
        await this.refresh();
        this.close();
      },
      addDays(date) {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + Number(this.newSprint.timeInterval));
        return newDate;
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
