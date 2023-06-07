import React, { useEffect, useState } from "react";
import Link from "next/link";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  // console.log(blog);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  }, []);
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl mb-10 font-bold">Blog</h1>
      {blog &&
        blog.map((item, index) => {
          return (
            <Link href={`/blogpost/${item.slug}`} key={index}>
              <li className="cursor-pointer mb-5">{item?.title}</li>
            </Link>
          );
        })}
    </div>
  );
};

export default Blog;
