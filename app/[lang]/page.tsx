import CTACard from "@/components/elements/cta-card";
import PaddingContainer from "@/components/layout/padding-container";
import PostCard from "@/components/post/post-card";
import PostList from "@/components/post/post-lists";
import directus from "@/lib/directus";
import { getDictionary } from "@/lib/getDictionary";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: {
    lang: string;
  };
}) {
  const locale = params.lang;

  const getAllPosts = async () => {
    try {
      const posts = await directus.items("post").readByQuery({
        fields: [
          "*",
          "author.id",
          "author.first_name",
          "author.last_name",
          "category.id",
          "category.title",
          "category.translations.*",
          "translations.*",
        ],
      });

      if (locale === "en") {
        return posts.data;
      } else {
        const localisedPosts = posts.data?.map((post) => {
          return {
            ...post,
            title: post.translations[0].title,
            description: post.translations[0].description,
            body: post.translations[0].body,
            category: {
              ...post.category,
              title: post.category.translations[0].title,
            },
          };
        });
        return localisedPosts;
      }

      /* console.log(posts.data?.[0]); */
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching posts");
    }
  };

  const posts = await getAllPosts();

  if (!posts) {
    notFound();
  }

  /* Get Dictionary */
  const dictionary = await getDictionary(locale);

  return (
    <PaddingContainer>
      <main className="space-y-10">
        <PostCard locale={locale} post={posts[0]} />
        <PostList
          locale={locale}
          posts={posts.filter((_post, index) => index > 0 && index < 3)}
        />
        {/* ---@ts-expect-error Async Server Component */}
        <CTACard dictionary={dictionary} />
        <PostCard locale={locale} reverse post={posts[3]} />
        <PostList
          locale={locale}
          posts={posts.filter((_post, index) => index > 3 && index < 6)}
        />
      </main>
    </PaddingContainer>
  );
}
