import { Directus } from "@directus/sdk";
const directus = new Directus(process.env.NEXT_PUBLIC_API_URL as string, {
  auth: {
    staticToken: process.env.ADMIN_TOKEN as string,
  },
});

export default directus;
