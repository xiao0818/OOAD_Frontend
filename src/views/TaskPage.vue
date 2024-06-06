<template>
  <div class="theme">
    <v-container style="width: 80%">
      <v-row align="center">
        <v-card class="elevation-5 my-5">
          <v-card-title>Task Title</v-card-title>
          <v-card-text class="text">{{ this.task.title }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Priority</v-card-title>
          <v-card-text class="text">{{ this.task.priority }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5" @mouseover="changeCursor(true)" @mouseleave="changeCursor(false)" @click="openMoveStateDialog()" :class="{ 'clickable': isHovered }">
          <v-card-title>State</v-card-title>
          <v-card-text class="text">{{ this.task.state }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5" @mouseover="changeCursor(true)" @mouseleave="changeCursor(false)" @click="openAssignHoursEstimateHoursDialog()" :class="{ 'clickable': isHovered }">
          <v-card-title>Estimate Hours</v-card-title>
          <v-card-text class="text">{{ this.task.hours }}</v-card-text>
        </v-card>
        <!-- move task dialog -->
        <v-dialog v-model="stateDialog" max-width="500px" persistent>
          <v-form ref="form">
            <v-card>
              <v-card-title>
                <span class="text-h5">Move Task</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <div>Current State is: {{ this.task.state }}</div>
                  </v-row>
                  <v-row>
                    <v-select
                      v-model="newState"
                      label="New State*"
                      :items="['TODO', 'DOING', 'DONE']"
                      :rules="stateRule"
                      required
                    ></v-select>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="close(); reset();">Cancel</v-btn>
                <v-btn color="primary" text @click="moveState(); reset();">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-dialog>
        <!-- end of move task dialog -->
        <!-- assign hours dialog -->
        <v-dialog v-model="estimateHoursDialog" max-width="500px" persistent>
          <v-form ref="form">
            <v-card>
              <v-card-title>
                <span class="text-h5">Assign Estimate Hours</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <div>Current Estimate Hours is: {{ this.task.hours }}</div>
                  </v-row>
                  <v-row>
                    <v-text-field
                      v-model="newHours"
                      label="New Estimate Hours*"
                      type="number"
                      :rules="hoursRule"
                      required
                    ></v-text-field>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="close(); reset();">Cancel</v-btn>
                <v-btn color="primary" text @click="assignEstimateHours(); reset();">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-dialog>
        <!-- end of assign hours dialog -->
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Description</v-card-title>
          <v-card-text class="text">{{ this.task.description }}</v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { AssignEstimateHours, MoveTask } from '../api/projectApi';

  export default {
    name: "TaskPage",
    components: {
    },
    data() {
      return {
        isHovered: false,
        stateDialog: false,
        estimateHoursDialog: false,
        newHours: 0,
        defaultHours: 0,
        newState: null,
        defaultState: null,
        stateRule: [
          (v) => !!v || "Field cannot be empty.",
        ],
        hoursRule: [
          (v) => /^\d+$/.test(v) || "Field can only contain numbers.",
        ],
        task: this.$route.params.task,
      }
    },
    watch: {
      stateDialog(val) {
        val || this.close();
      },
      estimateHoursDialog(val) {
        val || this.close();
      },
    },
    methods: {
      openMoveStateDialog() {
        this.stateDialog = true;
      },
      openAssignHoursEstimateHoursDialog() {
        this.estimateHoursDialog = true;
      },
      reset() {
        // this.$refs.form.reset();
      },
      async refresh() {
        // this.projects = await GetAllProjects();
      },
      close() {
        this.stateDialog = false;
        this.estimateHoursDialog = false;
        this.$nextTick(() => {
          this.newStoryPoint = this.defaultStoryPoint;
          this.newStoryPoint = this.defaultStoryPoint;
        });
      },
      async moveState() {
        await MoveTask(
          this.$route.params.backlogItemId,
          this.task.id,
          this.newState
        );
        this.task.state = this.newState;
        await this.refresh();
        this.close();
      },
      async assignEstimateHours() {
        await AssignEstimateHours(
          this.$route.params.backlogItemId,
          this.task.id,
          this.newHours
        );
        this.task.hours = this.newHours;
        await this.refresh();
        this.close();
      },
      changeCursor(value) {
        this.isHovered = value;
      },
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

  .clickable {
    cursor: pointer;
  }
</style>