import { Directus } from "@directus/sdk";
const directusClient = new Directus(process.env.NEXT_PUBLIC_API_URL as string);

export default directusClient;
