<template>
  <div class="theme">
    <v-container style="width: 80%">
      <v-data-table :headers="headers" :items="projects" sort-by="name" class="elevation-5 my-5" @click:row="openProject">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Project List</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <!-- create project dialog -->
            <v-dialog v-model="dialog" max-width="500px" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">Create Project</v-btn>
              </template>
              <!-- create project card -->
              <v-form ref="form">
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Create Project</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-text-field
                          v-model="newProject.name"
                          label="Project Name*"
                          type="text"
                          :rules="nameRule"
                          required
                        ></v-text-field>
                      </v-row>
                      <v-row>
                        <v-text-field
                          v-model="newProject.productOwner"
                          label="Product Owner*"
                          type="text"
                          :rules="productOwnerRule"
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
            <!-- end of create project dialog -->
          </v-toolbar>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import { getAllProjects } from '../api/projectApi';

  export default {
    name: "ProjectPage",
    components: {
    },
    data() {
      return {
        dialog: false,
        nameRule: [
          (v) => !!v || "Field cannot be empty.",
        ],
        productOwnerRule: [
          (v) => !!v || "Field cannot be empty.",
        ],
        headers: [
          { text: "Project Name", value: "name" },
          { text: "Product Owner", value: "productOwner" },
        ],
        newProject: {
          name: null,
          productOwner: null
        },
        defaultProject: {
          name: null,
          productOwner: null
        },
        projects: [],
      }
    },
    watch: {
      dialog(val) {
        val || this.close();
      },
    },
    async mounted() {
      this.projects = await getAllProjects();
    },
    methods: {
      openProject(value) {
        this.$router.push({ name: "Project", params: {projectId: value.id, project: value} });
      },
      reset() {
        this.$refs.form.reset();
      },
      async refresh() {
        this.projects = await getAllProjects();
      },
      close() {
        this.dialog = false;
        this.$nextTick(() => {
          this.newProject = Object.assign({}, this.defaultProject);
        });
      },
      async save() {
        // await createProject(
        //   this.newProject.name,
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
</style>
