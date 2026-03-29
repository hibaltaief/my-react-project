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