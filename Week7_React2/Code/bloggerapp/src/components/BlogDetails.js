import React from 'react';

const blogs = [
  { id: 1, title: "KarmaBhoomi", author: "PremChand" },
  { id: 2, title: "Autobiography of A Yogi", author: "Parmahansha" },
  { id: 3, title: "Chitralekha", author: "Bhagwati Charan Verma" }
];

const BlogDetails = () => {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {blogs.map(blog => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> by {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
