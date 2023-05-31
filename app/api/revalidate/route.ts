import { NextRequest } from "next/server";

export async function GET(request: NextRequest, res: any) {
  const path = request.nextUrl.searchParams.get("path");

  return await res.revalidate(`${path}`);
}
