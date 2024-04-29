<template>
  <div class="theme">
    <v-container style="width: 80%">
      <v-data-table :headers="headers" :items="projects" sort-by="name" class="elevation-5 my-5" @click:row="openProject">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Project List</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn align-left color="primary">Create Project</v-btn>
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
        headers: [
          { text: "Project Name", value: "name" },
          { text: "Product Owner", value: "productOwner" },
        ],
        projects: [
          {
            name: 'dcTrack',
            id: '1300717a-e3b7-49b4-9258-b3ab6027006d',
            productOwner: 'Sunbird'
          },
          {
            name: 'ezKanban',
            id: '356bfc8f-4840-4484-a613-8151023b3641',
            productOwner: 'Teddy'
          },
          {
            name: 'IoT',
            id: '00a27b11-3fe3-4f92-9d21-c5e733d20412',
            productOwner: 'YC'
          },
        ],
      }
    },
    methods: {
      openProject(value) {
        this.$router.push({ name: "Project", params: {projectId: value.id} });
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
</style>
