import Router from "./routes";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="app">
      <Header />
      <Router />
    </div>
  );
}

export default App;
