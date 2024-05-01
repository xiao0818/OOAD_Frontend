<template>
  <div class="theme">
    <v-container style="width: 80%">
      <v-row align="center">
        <v-card class="elevation-5 my-5">
          <v-card-title>Backlog Item</v-card-title>
          <v-card-text class="text">{{ this.backlogItem.name }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5" @mouseover="changeCursor(true)" @mouseleave="changeCursor(false)" :class="{ 'clickable': isHovered }">
          <v-card-title>Story Point</v-card-title>
          <v-card-text class="text">{{ this.backlogItem.storyPoint }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Importance</v-card-title>
          <v-card-text class="text">{{ this.backlogItem.importance }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Acceptance Criteria</v-card-title>
          <v-card-text class="text">{{ this.backlogItem.acceptanceCriteria }}</v-card-text>
        </v-card>
      </v-row>
      <v-data-table :headers="headers" :items="backlogItem.taskList" sort-by="title" class="elevation-5 my-5" @click:row="openTask">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Task List</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <!-- create task dialog -->
            <v-dialog v-model="dialog" max-width="500px" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">Create Task</v-btn>
              </template>
              <!-- create task card -->
              <v-form ref="form">
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Create Task</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-text-field
                            v-model="newTask.title"
                            label="Task Title*"
                            type="text"
                            :rules="titleRule"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-select
                            v-model="newTask.priority"
                            label="Priority*"
                            :items="['CRITICAL', 'HIGH', 'MEDIUM', 'LOW']"
                            :rules="priorityRule"
                            required
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field
                            v-model="newTask.hours"
                            label="Estimate Hours"
                            type="number"
                            :rules="hoursRule"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                          <v-text-field
                            v-model="newTask.description"
                            label="Description*"
                            type="text"
                            :rules="descriptionRule"
                            required
                          ></v-text-field>
                        </v-col>
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
            <!-- end of create task dialog -->
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
        isHovered: false,
        dialog: false,
        titleRule: [
          (v) => !!v || "Field cannot be empty.",
        ],
        priorityRule: [
          (v) => !!v || "Field cannot be empty.",
        ],
        hoursRule: [
          // (v) => /^\d+$/.test(v) || "Field can only contain numbers.",
        ],
        descriptionRule: [
          (v) => !!v || "Field cannot be empty.",
        ],
        newTask: {
          title: null,
          priority: null,
          hours: null,
          description: null
        },
        defaultTask: {
          title: null,
          priority: null,
          hours: null,
          description: null
        },
        headers: [
          { text: "Task Title", value: "title" },
          { text: "Priority", value: "priority" },
          { text: "State", value: "state" },
          { text: "Estimate Hours", value: "hours" },
        ],
        backlogItem: this.$route.params.backlogItem,
      }
    },
    watch: {
      dialog(val) {
        val || this.close();
      },
    },
    mounted() {
      // this.tasks = $store;
    },
    methods: {
      openTask(value) {
        this.$router.push({ name: "Task", params: {projectId: this.$route.params.projectId, sprintId: this.$route.params.sprintId, backlogItemId: this.$route.params.backlogItemId, taskId: value.id, task: value} });
      },
      reset() {
        this.$refs.form.reset();
      },
      async refresh() {
        // this.projects = await getAllProjects();
      },
      close() {
        this.dialog = false;
        this.$nextTick(() => {
          this.newTask = Object.assign({}, this.defaultTask);
        });
      },
      async save() {
        // await createTask(
        //   this.newProject.projectName,
        //   this.newProject.productOwner
        // );
        await this.refresh();
        this.close();
      },
      changeCursor(value) {
        this.isHovered = value;
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

  .clickable {
    cursor: pointer;
  }
</style>
