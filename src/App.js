import React, { useState } from "react";
import Post from "./components/Post/Post";
import SearchBar from "./components/SearchBar/SearchBar";
import postsList from "./data";

// Tema: React Components, State & Props

function App() {
  const [posts, setPosts] = useState(postsList);
  /// App este un container pentru toate componentele noastre
  //JSX - sintaxa react

  /// Immutable - care nu muteaza, nu schimba datele initiale
  const filterPosts = (query) => {
    const filteredPosts = posts.filter((post) => {
      return post.username.includes(query);
    });
    setPosts(filteredPosts);
  };

  const likePost = (postId) => {
    const likedPosts = posts.map((post) => {
      if (post.id === postId) return { ...post, likes: post.likes + 1 };
      return post;
    });

    setPosts(likedPosts);
  };

  return (
    <div className="App">
      <SearchBar filterPosts={filterPosts} />
      {posts.map((post, index) => (
        <Post key={index} post={post} likePost={likePost} />
      ))}
    </div>
  );
}

export default App;
