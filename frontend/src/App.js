import MapView from "./components/MapView";
import UploadPanel from "./components/UploadPanel";

function App() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        Intelligence Fusion Dashboard
      </h2>

      <UploadPanel />
      <MapView />
    </div>
  );
}

export default App;