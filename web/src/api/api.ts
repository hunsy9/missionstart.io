import { apiClient } from "../utils/apiClient";

export async function getUser(userId: string) {
  return apiClient.get(`/users/${userId}`);
}