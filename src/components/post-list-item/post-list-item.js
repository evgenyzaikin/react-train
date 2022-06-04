import React from "react";
import "./post-list-item.css";

const PostListItem = ({
  label,
  important = false,
  like = false,
  onToggleLike,
  onToggleImportant,
  onDelete,
}) => {
  let classes = "app-list-item d-flex justify-content-between";

  if (important) classes += " important";
  if (like) classes += " like";

  return (
    <li className={classes}>
      <span className="app-list-item-label" onClick={onToggleLike}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-star btn-sm"
          onClick={() => onToggleImportant()}
        >
          <i className="fa fa-star"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fa fa-trash-o" onClick={() => onDelete()}></i>
        </button>
        <i className="fa fa-heart" onClick={() => onToggleLike()}></i>
      </div>
    </li>
  );
};

export default PostListItem;
