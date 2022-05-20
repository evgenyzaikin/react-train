import React from "react";
import "./App.css";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form/post-add-form";

function App() {
  const data = [
    { label: "Hi, I'm a first tweet!", isImportant: true },
    { label: "I'm a second tweet!", isImportant: false },
    {
      label: "Yep, this is third tweet, how did you guess?",
      isImportant: false,
    },
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data}/>
      <PostAddForm />
    </div>
  );
}

export default App;
