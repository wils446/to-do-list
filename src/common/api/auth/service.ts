import { AxiosResponse } from "axios";
import axios from "../axios";
import type { UserResponse } from "./interfaces";

export const createUser = async (name: string, email: string, password: string): Promise<AxiosResponse> => {
    const response = await axios.post("/api/register", { name, email, password });
    return response;
};

export const login = async (email: string, password: string): Promise<UserResponse> => {
    const response = await axios.post("/api/login", { email, password });
    return response.data;
};
