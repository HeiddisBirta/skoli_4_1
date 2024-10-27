import Card from "./components/Card";
import "./App.css";
function App() {
  return (
    <div className="w-96 flex flex-col p-6">

      <Card title="I like flowers">Card</Card>
      <p className="p-6 flex justify-center">
        A card with photo, title and small text
      </p>
    </div>
  );
}

export default App;
