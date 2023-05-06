import "./App.css";
import Card from "./components/card/Card.jsx";
import data from "./utils/data";

function App() {
  console.log(data);
  return (
    <div className="App">
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            btnName={item.btnName}
            image={item.img}
            language={item.language}
          />
        );
      })}
    </div>
  );
}

export default App;
