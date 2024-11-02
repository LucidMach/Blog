import type { APIRoute } from "astro";
import { db, BlogStats, eq } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const { title } = await request.json();

  try {
    const blogstats = await db
      .select()
      .from(BlogStats)
      .where(eq(BlogStats.title, title));

    let views = 0;

    if (blogstats.length > 0) {
      views = blogstats[0].views + 1;
      await db
        .update(BlogStats)
        .set({ views })
        .where(eq(BlogStats.title, title));
    } else {
      views = 1;
      await db.insert(BlogStats).values({ title, views });
    }

    return new Response(JSON.stringify({ views }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error incrementing view count:", err);
    return new Response(
      JSON.stringify({ error: "Failed to increment view count" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
