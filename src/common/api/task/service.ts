import axios from "../axios";
import type { TaskResponse } from "./interfaces";

export const createTask = async (title: string, note: string): Promise<number> => {
    const response = await axios.post("/api/tasks", { title, note });
    return response.status;
};

export const getTask = async (): Promise<TaskResponse> => {
    const response = await axios.get("/api/tasks");
    return response.data;
};

export const updateTask = async (title: string, note: string): Promise<number> => {
    const response = await axios.put("/api/tasks", { title, note });
    return response.status;
};
