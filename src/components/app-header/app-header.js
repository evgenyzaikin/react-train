import React from "react";
import "./app-header.css";

const AppHeader = ({ allPostsCount, likedPostsCount }) => {
  return (
    <div className="app-header d-flex">
      <h1>Evgeny</h1>
      <h2>
        {allPostsCount} записей, понравилось {likedPostsCount}
      </h2>
    </div>
  );
};

export default AppHeader;
