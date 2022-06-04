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
    maxId: 4,
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
      return { ...state, data: newArr };
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
      return { ...state, data: newArr };
    });
  };

  const addPost = (text) => {
    setState(({ data, maxId }) => {
      const newPost = {
        label: text,
        id: maxId,
        like: false,
        important: false,
      };
      const newArr = [...data, newPost];
      const newId = maxId + 1;
      return { ...state, data: newArr, maxId: newId };
    });
  };

  const deletePost = (id) => {
    setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return { ...state, data: newArr };
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
        onDelete={deletePost}
      />
      <PostAddForm onAdd={addPost} />
    </div>
  );
}

export default App;
