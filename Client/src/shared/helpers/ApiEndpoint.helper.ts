import { API_SERVER } from "../../config";

export function getApiEndpoint(path: string): string {
  return `${API_SERVER}/api/${path}`;
}