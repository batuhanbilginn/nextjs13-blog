import directus from "@/lib/directus";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.NEXT_PUBLIC_SITE_URL as string;

  // Get Posts
  const posts = await directus.items("post").readByQuery({
    fields: ["slug", "date_updated"],
  });

  const postLinks = posts?.data?.map((post) => {
    return [
      {
        url: `${baseURL}/en/blog/${post.slug}`,
        lastModified: new Date(post.date_updated),
      },
      {
        url: `${baseURL}/de/blog/${post.slug}`,
        lastModified: new Date(post.date_updated),
      },
      {
        url: `${baseURL}/blog/${post.slug}`,
        lastModified: new Date(post.date_updated),
      },
    ];
  });

  // Get Categories
  const categories = await directus.items("category").readByQuery({
    fields: ["slug", "date_updated"],
  });

  const categoryLinks = categories?.data?.map((category) => {
    return [
      {
        url: `${baseURL}/en/${category.slug}`,
        lastModified: new Date(),
      },
      {
        url: `${baseURL}/de/${category.slug}`,
        lastModified: new Date(),
      },
      {
        url: `${baseURL}/${category.slug}`,
        lastModified: new Date(),
      },
    ];
  });

  const dynamicLinks = postLinks?.concat(categoryLinks ?? []).flat() ?? [];

  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/de`,
      lastModified: new Date(),
    },
    ...dynamicLinks,
  ];
}
