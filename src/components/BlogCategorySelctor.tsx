import { useState, type ReactElement } from "react";
import BlogCard from "./BlogCard";
import { element } from "three/examples/jsm/nodes/Nodes.js";

interface props {
  posts: {
    data: { type: string; title: string; pubDate: Date; heroImage: string };
    slug: string;
  }[];
}

const BlogCategorySelector: React.FC<props> = ({ posts }) => {
  const categories: string[] = ["All"];
  const years: number[] = [];
  const [active, setActive] = useState("All");

  posts.forEach((post) => {
    if (categories.includes(post.data.type)) {
      null;
    } else {
      categories.push(post.data.type);
    }

    if (years.includes(post.data.pubDate.getFullYear())) {
      null;
    } else {
      years.push(post.data.pubDate.getFullYear());
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
          <BlogList posts={posts} years={years} />
        ) : (
          <BlogList
            posts={posts.filter((post) => post.data.type === active)}
            years={years}
          />
        )}
      </ul>
    </>
  );
};

export default BlogCategorySelector;

interface prop {
  years: number[];
  posts: {
    data: { type: string; title: string; pubDate: Date; heroImage: string };
    slug: string;
  }[];
}

const BlogList: React.FC<prop> = ({ years, posts }) => {
  const list: ReactElement[] = [];

  years.forEach((year) => {
    list.push(<h1 className="text-3xl">{year}</h1>);

    let postCount = 0;

    posts.forEach((post) => {
      if (post.data.pubDate.getFullYear() === year) {
        list.push(<BlogCard post={post} />);
        postCount++;
      }
    });

    if (postCount === 0) list.push(<h1>404 - No Blog Posts Written :( </h1>);
    list.push(<br />);
  });

  return <>{list.map((element) => element)}</>;
};
