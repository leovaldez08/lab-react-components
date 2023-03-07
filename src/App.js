import "./App.css";
import GallaryFooter from "./components/GallaryFooter";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div>
      <Header />
      <Body />
      {/* adding footer component */}
      <GallaryFooter />
    </div>
  );
}

export default App;
