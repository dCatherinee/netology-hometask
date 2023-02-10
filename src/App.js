import "./App.css";
import BasicCard from "./Components/BasicCard/BasicCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const params = {
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    textButton: "Go somewhere",
    img: "http://placehold.it/180x100",
  };

  const params2 = {
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    textButton: "Go somewhere",
    img: "",
  };

  return (
    <div>
      <BasicCard {...params} />
    </div>
  );
}

export default App;
