// src/App.jsx

// Global stories array
const stories = [
  {
    objectID: 1,
    title: "React 101",
    url: "https://reactjs.org",
    author: "Dan",
    points: 100,
    num_comments: 10
  },
  {
    objectID: 2,
    title: "Vite Docs",
    url: "https://vitejs.dev",
    author: "Evan",
    points: 50,
    num_comments: 5
  }
];

// Header Component
function Header() {
  return <h1>Hacker News Clone</h1>;
}

// Search Component
function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" placeholder="Search stories..." />
    </div>
  );
}

// List Component
function List() {
  return (
    <div>
      {stories.map((story) => (
        <div key={story.objectID}>
          <span>{story.title}</span>
          <span> - {story.author}</span>
          <span> | {story.points} points</span>
          <span> | {story.num_comments} comments</span>
        </div>
      ))}
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div>
      <Header />
      <Search />
      <List />
    </div>
  );
}

export default App;