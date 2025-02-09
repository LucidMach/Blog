import { useState } from "react";
import FormattedDate from "./FormattedDate.astro";

interface props {
  posts: {
    data: { type: string; title: string; pubDate: Date; heroImage: string };
    slug: string;
  }[];
}

const BlogCategorySelector: React.FC<props> = ({ posts }) => {
  const categories: string[] = ["All"];
  const [active, setActive] = useState("All");

  posts.forEach((post) => {
    if (categories.includes(post.data.type)) {
      null;
    } else {
      categories.push(post.data.type);
    }
  });

  return (
    <>
      <div className="flex w-full gap-8 my-8 flex-wrap">
        {categories.map((cat) => (
          <div
            className={`${cat === active ? "bg-red-400" : "bg-white"} 
                text-[#1a1a1a] text-left rounded-full px-6 w-fit font-comfortaa`}
            key={cat}
            onClick={() => setActive(cat)}
          >
            {cat}
          </div>
        ))}
      </div>
      <ul className="flex flex-col gap-5 w-full text-sm md:text-base my-2">
        {active === "All" ? (
          posts.map((post) => <BlogCard post={post} />)
        ) : (
          <></>
        )}
        {posts.map((post) =>
          post.data.type === active ? <BlogCard post={post} /> : <></>
        )}
      </ul>
    </>
  );
};

export default BlogCategorySelector;

interface prop {
  post: any;
}

const BlogCard: React.FC<prop> = ({ post }) => {
  return (
    <li>
      <a
        className="bg-transparent hover:text-red-400 hover:cursor-pointer border-2 rounded-md hover:border-red-400 p-2 flex justify-between items-center w-full"
        href={`/blog/${post.slug}/`}
      >
        <div>
          <p className="max-w-[240px] md:max-w-xl font-semibold">
            {post.data.title}
          </p>
          {post.data.pubDate.toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
        <img src={post.data.heroImage} className="h-10 w-20 md:h-20 md:w-36" />
      </a>
    </li>
  );
};
