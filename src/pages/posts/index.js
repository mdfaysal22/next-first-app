import React from "react";
import Post from "../../Components/post/post";

const index = ({posts}) => {
    
  return <div>
    <div className="mx-auto">
    <h1 className="text-4xl text-center font-semibold my-4 uppercase">{posts.length} Posts Here.</h1>
    <div className=" grid grid-cols-3">
    {
        posts.map(post => <Post key={post.id} post = {post}></Post>)
    }
    </div>
    </div>
  </div>;
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
};
