import "./App.css";
import Edit from "./components/Edit";
import Comment from "./components/Comment";

function App() {
  // const [content, setContent] = useState<string | number>("");

  return (
    <div className="App">
      <Edit />
      <Comment />
    </div>
  );
}

export default App;
