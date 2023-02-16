import Link from "next/link";
import React from "react";

const Post = ({ post }) => {

  return (
    <div className="text-center mx-auto text-2xl my-2">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{post?.title}</h2>
          <div className="card-actions justify-end">
            <Link href={`/posts/${post?.id}`}><button  className="btn btn-primary">See Details post</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
