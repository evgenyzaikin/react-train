import React, { useState } from "react";
import "./post-list-item.css";

const PostListItem = ({ label, isImportant = false, isLiked = false }) => {
  let classes = "app-list-item d-flex justify-content-between";
  const [important, setImportant] = useState(isImportant);
  const [like, setLike] = useState(isLiked);
  if (important) classes += " important";
  if (like) classes += " like";

  return (
    <li className={classes}>
      <span
        className="app-list-item-label"
        onClick={() => setLike((like) => !like)}
      >
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-star btn-sm"
          onClick={() => setImportant((important) => !important)}
        >
          <i className="fa fa-star"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </li>
  );
};

export default PostListItem;
