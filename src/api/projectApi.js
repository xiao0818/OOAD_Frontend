import axios from "axios";

export const getAllProjects = async function () {
  try {
    const response = await axios.get("/api/v1/GET/projectList");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};