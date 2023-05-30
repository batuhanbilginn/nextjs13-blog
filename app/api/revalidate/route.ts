import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  const categorySlug = request.nextUrl.searchParams.get("category-slug");
  console.log(`/en/post/${slug}`);
  // Revalidate the Post in Every Language
  /* revalidatePath(`/en`); */
  revalidatePath(`/en/post/${slug}`);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
