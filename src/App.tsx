import "./App.css";
import Edit from "./components/Edit";
import List from "./components/List";

function App() {
  // const [content, setContent] = useState<string | number>("");

  return (
    <div className="App">
      <Edit />
      <List />
    </div>
  );
}

export default App;
