import axios from "axios";

export const GetAllProjects = async function () {
  try {
    const response = await axios.get("/api/v1/GET/projectList");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const MoveBacklogItem = async function (projectId, sprintId, backlogItemId) {
  try {
    const response = await axios.put("/api/v1/PUT/project/moveBacklogItem", null, {params: {projectId: projectId, sprintId: sprintId, backlogItemId: backlogItemId}});
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const AssignStoryPoint = async function (backlogItemId, storyPoint) {
  try {
    const response = await axios.patch("/api/v1/PATCH/backlogitem/assignStoryPoint", null, {params: {backlogItemId: backlogItemId, storyPoint: storyPoint}});
    return response.data;
  } catch (err) {
    console.log(err);
  }
};