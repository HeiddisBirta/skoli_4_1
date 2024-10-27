import Card from "./components/Card";
import "./App.css";
function App() {
  return (
    <div className="w-96 flex flex-col p-6">
      <h1 className="p-6 flex justify-center">I like flowers</h1>
      <Card>Card</Card>
      <p className="p-6 flex justify-center">
        A card with photo, title and small text
      </p>
    </div>
  );
}

export default App;
