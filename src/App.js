import "./App.css";
import NavBar from "./Components/NavBar";
import CardList from "./Sections/CardList";
import ImgFromSrc from "./Assets/logo512.png";

function App() {
  const name = "from React ";
  const handleConfirm = () => {
     window.confirm("Are you sure?");
  };

  return (
    <>
      <NavBar />
      <h1>Hello {name}</h1>
      <CardList />
      <img src={ImgFromSrc} className="App-logo" alt="logo" />
      <button onClick={handleConfirm}>Confirm</button>
    </>
  );
}

export default App;
