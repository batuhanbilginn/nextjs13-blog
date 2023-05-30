import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  const categorySlug = request.nextUrl.searchParams.get("category-slug");
  // Revalidate the Post in Every Language
  revalidatePath(`/en/post/${slug}`);
  revalidatePath(`/de/post/${slug}`);
  // Revalidate the Category
  revalidatePath(`/en/${categorySlug}`);
  revalidatePath(`/de/${categorySlug}`);
  // Revalidate Home
  revalidatePath(`/en`);
  revalidatePath(`/de`);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
