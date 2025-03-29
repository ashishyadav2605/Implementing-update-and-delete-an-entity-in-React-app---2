import ItemList from "./components/ItemList";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  
  return <ItemList apiUrl={API_URI} />;
}

export default App;