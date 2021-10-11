import "./App.css";

export default function App() {
  return (
    <div className="SearchEngine">
      <form>
        <input type="Search" placeholder="enter a city" />
        <button type="Submit">Search</button>
      </form>
      <p className="coded">
        <a href="https://github.com/alraquel"> Coded</a>
        by Raquel
      </p>
    </div>
  );
}
