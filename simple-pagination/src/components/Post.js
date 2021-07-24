import React from "react";

const Post = ({ posts, loading }) => {
  if (loading) return <h2>Laoding...</h2>;
  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Post;