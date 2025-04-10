import { createClient } from "@sanity/client";

export const sanity = createClient({
    projectId: 'in4t04gl',
    dataset: 'production',
  useCdn: true, 
  apiVersion: "2024-04-07", 
});