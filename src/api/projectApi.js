import axios from "axios";

export const getAllProjects = async function () {
  try {
    const response = await axios.get("/api/v1/GET/projectList");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const moveBacklogItem = async function (projectId, sprintId, backlogItemId) {
  try {
    const response = await axios.put("/api/v1/PUT/project/moveBacklogItem", null, {params: {projectId: projectId, sprintId: sprintId, backlogItemId: backlogItemId}});
    return response.data;
  } catch (err) {
    console.log(err);
  }
};