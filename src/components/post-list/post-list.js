import React from "react";
import "./post-list.css";

import PostListItem from "../post-list-item";

const PostList = ({ posts, onToggleLike, onToggleImportant, onDelete }) => {
  const elememts = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <PostListItem
        key={id}
        {...itemProps}
        onToggleLike={() => onToggleLike(id)}
        onToggleImportant={() => onToggleImportant(id)}
        onDelete={() => onDelete(id)}
      />
    );
  });
  return <ul className="app-list list-group">{elememts}</ul>;
};

export default PostList;
