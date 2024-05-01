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
        <v-card class="elevation-5 my-5">
          <v-card-title>State</v-card-title>
          <v-card-text class="text">{{ this.task.state }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5" @mouseover="changeCursor(true)" @mouseleave="changeCursor(false)" @click="openAssignHoursDialog()" :class="{ 'clickable': isHovered }">
          <v-card-title>Estimate Hours</v-card-title>
          <v-card-text class="text">{{ this.task.hours }}</v-card-text>
        </v-card>
        <!-- assign hours dialog -->
        <v-dialog v-model="dialog" max-width="500px" persistent>
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
                <v-btn color="primary" text @click="save(); reset();">Save</v-btn>
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
import { AssignEstimateHours } from '../api/projectApi';

  export default {
    name: "TaskPage",
    components: {
    },
    data() {
      return {
        isHovered: false,
        dialog: false,
        newHours: 0,
        defaultHours: 0,
        hoursRule: [
          (v) => /^\d+$/.test(v) || "Field can only contain numbers.",
        ],
        task: this.$route.params.task,
      }
    },
    watch: {
      dialog(val) {
        val || this.close();
      },
    },
    methods: {
      openAssignHoursDialog() {
        this.dialog = true;
      },
      reset() {
        // this.$refs.form.reset();
      },
      async refresh() {
        // this.projects = await GetAllProjects();
      },
      close() {
        this.dialog = false;
        this.$nextTick(() => {
          this.newStoryPoint = this.defaultStoryPoint;
        });
      },
      async save() {
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