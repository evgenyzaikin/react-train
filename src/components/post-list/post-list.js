import React from "react";
import "./post-list.css";

import PostListItem from '../post-list-item';

const PostList = () => {
    return(
        <ul className="app-list list-group">
            <PostListItem label="Hi, I'm a first tweet!" isImportant/>
            <PostListItem label="I'm a second tweet!"/>
            <PostListItem label="Yep, this is third tweet, how did you guess?"/>
        </ul>
    )
};

export default PostList;