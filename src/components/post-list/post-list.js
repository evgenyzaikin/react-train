import React from "react";
import "./post-list.css";

import PostListItem from "../post-list-item";

const PostList = ({ posts }) => {
  const elememts = posts.map((item) => {
    const { ...itemProps } = item;
    return <PostListItem {...itemProps} />;
  });
  return <ul className="app-list list-group">{elememts}</ul>;
};

export default PostList;
