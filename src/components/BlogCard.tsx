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
          <p className="text-sm">
            {post.data.pubDate.toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <p className="max-w-[240px] md:max-w-xl font-semibold">
            {post.data.title}
          </p>
        </div>
      </a>
    </li>
  );
};

export default BlogCard;
