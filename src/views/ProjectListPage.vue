<template>
  <v-data-table :headers="headers" :items="projects" @click:row="openProject" />
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
          { text: "Product Owner", value: "po" },
        ],
        projects: [
          {
            name: 'dcTrack',
            id: '1300717a-e3b7-49b4-9258-b3ab6027006d',
            po: 'Sunbird'
          },
          {
            name: 'ezKanban',
            id: '356bfc8f-4840-4484-a613-8151023b3641',
            po: 'Teddy'
          },
          {
            name: 'IoT',
            id: '00a27b11-3fe3-4f92-9d21-c5e733d20412',
            po: 'YC'
          },
        ],
      }
    },
    methods: {
      openProject(value) {
        console.log(value.id)
        this.$router.push({ name: "Project", params: {id: value.id} });
      }
    }
  }
</script>

<style>
</style>