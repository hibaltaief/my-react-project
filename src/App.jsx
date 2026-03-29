// src/App.jsx

import React from "react";

/*
Hacker News story object structure:
{
  objectID: unique identifier (use as React key),
  title: string,
  url: string (link to article),
  author: string,
  points: number,
  num_comments: number
}
objectID should be used as the React key because it uniquely identifies each story.
This structure is realistic for an API because APIs typically return JSON objects with consistent properties for each item.
*/

// Step 2 – Define fake data
const stories = [
  {
    objectID: 1,
    title: "React 101: Getting Started",
    url: "https://reactjs.org/docs/getting-started.html",
    author: "Dan Abramov",
    points: 120,
    num_comments: 30
  },
  {
    objectID: 2,
    title: "Vite – Next Generation Frontend Tooling",
    url: "https://vitejs.dev/",
    author: "Evan You",
    points: 95,
    num_comments: 12
  },
  {
    objectID: 3,
    title: "JavaScript Tips for Beginners",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    author: "MDN Contributors",
    points: 80,
    num_comments: 8
  }
];

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Hacker News–Style Stories</h1>
      {stories.map((story) => (
        <div
          key={story.objectID}
          style={{
            border: "1px solid #ccc",
            marginBottom: "15px",
            padding: "10px",
            borderRadius: "5px"
          }}
        >
          <h3>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
          </h3>
          <p>Author: {story.author}</p>
          <p>Points: {story.points}</p>
          <p>Comments: {story.num_comments}</p>
        </div>
      ))}
    </div>
  );
}

export default App;