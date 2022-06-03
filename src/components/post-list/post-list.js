import React from "react";
import "./post-list.css";

import PostListItem from "../post-list-item";

const PostList = ({ posts, onToggleLike, onToggleImportant }) => {
  const elememts = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <PostListItem
        key={id}
        {...itemProps}
        onToggleLike={() => onToggleLike(id)}
        onToggleImportant={() => onToggleImportant(id)}
      />
    );
  });
  return <ul className="app-list list-group">{elememts}</ul>;
};

export default PostList;
