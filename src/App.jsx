import "./App.css";
import ApplicationHeader from "./container/ApplicationHeader";
import ApplicationBody from "./container/ApplicationBody";

function App() {
  return (
    <div className="app-container">
      <ApplicationHeader />
      <div className="flex-fill">
        <ApplicationBody />
      </div>
    </div>
  );
}

export default App;
