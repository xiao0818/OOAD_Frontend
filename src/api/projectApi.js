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

export const AssignEstimateHours = async function (backlogItemId, taskId, hours) {
  try {
    const response = await axios.patch("/api/v1/PATCH/task/assignEstimateHours", null, {params: {backlogItemId: backlogItemId, taskId: taskId, hours: hours}});
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const CreateTask = async function (backlogItemId, title, hours, priority, description) {
  try {
    const response = await axios.post("/api/v1/PUT/task", null, {params: {backlogItemId: backlogItemId, title: title, hours: hours, priority: priority, description: description}});
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const CreateProject = async function (name, productOwner) {
  try {
    const response = await axios.post("/api/v1/PUT/project", null, {params: {projectName: name, productOwnerName: productOwner}});
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const CreateBacklogItem = async function (projectId, name, storyPoint, importance, acceptanceCriteria) {
  try {
    const response = await axios.put("/api/v1/PUT/backlogitem", null, {params: {projectId: projectId, backlogItemName: name, storyPoint: storyPoint, importance: importance, acceptanceCriteria: acceptanceCriteria}});
    return response.data;
  } catch (err) {
    console.log(err);
  }
};