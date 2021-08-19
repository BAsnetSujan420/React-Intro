import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const history = useHistory();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by : {blog.author}</p>
          <div>{blog.body}</div>
          <button type="button" onClick={handleDelete}>
            delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
