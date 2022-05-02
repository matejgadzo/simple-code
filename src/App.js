import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import "./index.scss";

function App() {

  return (
    <div className="content-wrapper">
        <Navbar />
      <div className="main-wrapper">
        <Main/>
      </div>
    </div>
  );
}

export default App;
