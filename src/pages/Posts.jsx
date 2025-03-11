import React from "react";
import { Link, useLoaderData } from "react-router";

const Posts = () => {
  const postsData = useLoaderData();

  return (
    <div className="w-full h-full ">
      <h1 className="text-3xl font-medium mb-[20px] text-center">Posts List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-2 mx-2">
        {postsData.slice(0,20).map((post) => (
          <div key={post.id} className="bg-violet-600 text-white p-[20px] rounded-sm">
            <h4 className="mb-[10px]">{post.title}</h4>
            <Link to={post.id.toString()}>
              <button className="bg-white dark:bg-slate-950 dark:text-white text-violet-600 p-[5px] rounded-sm">View post</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;

export const postsLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = response.json();
  return data;
};
