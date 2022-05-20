import React from "react";
import "./post-list.css";

import PostListItem from "../post-list-item";

const PostList = ({ posts }) => {
  const elememts = posts.map((item) => {
    return <PostListItem label={item.label} isImportant={item.isImportant} />;
  });
  return <ul className="app-list list-group">{elememts}</ul>;
};

export default PostList;
