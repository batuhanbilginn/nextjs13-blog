import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  const categorySlug = request.nextUrl.searchParams.get("category-slug");
  // Revalidate the Post in Every Language
  revalidatePath(`/[lang]/post/[slug]`);
  revalidatePath(`/[lang]/post/[slug]`);
  // Revalidate the Category
  revalidatePath(`/[lang]/[category]`);
  revalidatePath(`/[lang]/[category]`);
  // Revalidate Home
  revalidatePath(`/[lang]`);
  revalidatePath(`/[lang]`);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
