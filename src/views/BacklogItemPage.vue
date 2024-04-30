<template>
  <div class="theme">
    <v-container style="width: 80%">
      <v-row align="center">
        <v-card class="elevation-5 my-5">
          <v-card-title>Backlog Item</v-card-title>
          <v-card-text class="text">{{ backlogItem.name }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Story Point</v-card-title>
          <v-card-text class="text">{{ backlogItem.storyPoint }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Importance</v-card-title>
          <v-card-text class="text">{{ backlogItem.importance }}</v-card-text>
        </v-card>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card class="elevation-5 my-5">
          <v-card-title>Acceptance Criteria</v-card-title>
          <v-card-text class="text">{{ backlogItem.acceptanceCriteria }}</v-card-text>
        </v-card>
      </v-row>
      <v-data-table :headers="headers" :items="tasks" sort-by="title" class="elevation-5 my-5" @click:row="openTask">
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
                            label="Estimate Hours*"
                            type="number"
                            :rules="hoursRule"
                            required
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
        dialog: false,
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
        titleRule: [
          (v) => !!v || "Field cannot be empty.",
        ],
        priorityRule: [
          (v) => !!v || "Field cannot be empty.",
        ],
        hoursRule: [
          (v) => !!v || "Field cannot be empty.",
          (v) => /^\d+$/.test(v) || "Field can only contain numbers.",
        ],
        descriptionRule: [
          (v) => !!v || "Field cannot be empty.",
        ],
        backlogItem: {
          name: 'Sprint Backlog Item 1',
          id: '6d039242-c8cb-4fc7-87e1-5732aa8df6ab',
          storyPoint: '3',
          importance: '99',
          acceptanceCriteria: 'Criteria 1'
        },
        headers: [
          { text: "Task Title", value: "title" },
          { text: "Priority", value: "priority" },
          { text: "State", value: "state" },
          { text: "Estimate Hours", value: "hours" },
        ],
        tasks: [
          {
            title: 'Task 1',
            id: '32317bad-1a12-4acb-aef7-86c5cc99b610',
            priority: 'CRITICAL',
            state: 'Done',
            hours: '3',
            description: 'Description 001'
          },
          {
            title: 'Task 2',
            id: '3cb76c7f-b447-4005-a541-af493fec8c60',
            priority: 'HIGH',
            state: 'Doing',
            hours: '1',
            description: 'Description 002'
          },
          {
            title: 'Task 3',
            id: '961cb3e2-cbe3-4a4e-8760-16b00af30a25',
            priority: 'MEDIUM',
            state: 'Todo',
            hours: '2',
            description: 'Description 003'
          },
        ],
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
        this.$router.push({ name: "Task", params: {projectId: this.$route.params.projectId, sprintId: this.$route.params.sprintId, backlogItemId: this.$route.params.backlogItemId, taskId: value.id} });
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
