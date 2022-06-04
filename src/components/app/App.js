import React, { useState } from "react";
import "./App.css";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form/post-add-form";

function App() {
  const data = [
    { label: "Hi, I'm a first tweet!", id: 1, important: false, like: true },
    { label: "I'm a second tweet!", id: 2, important: true, like: false },
    {
      label: "Yep, this is third tweet, how did you guess?",
      id: 3,
      important: false,
      like: false,
    },
  ];

  const [state, setState] = useState({
    data,
  });

  const onToggleLike = (id) => {
    setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, like: !old.like };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return { data: newArr };
    });
  };

  const onToggleImportant = (id) => {
    setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, important: !old.important };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return { data: newArr };
    });
  };

  const allPostsCount = state.data.length;
  const likedPostsCount = state.data.filter(
    (post) => post.like === true
  ).length;

  return (
    <div className="app">
      <AppHeader
        allPostsCount={allPostsCount}
        likedPostsCount={likedPostsCount}
      />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList
        posts={state.data}
        onToggleLike={onToggleLike}
        onToggleImportant={onToggleImportant}
      />
      <PostAddForm />
    </div>
  );
}

export default App;
