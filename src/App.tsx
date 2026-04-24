import Hero from "./components/Hero";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Menu />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}

export default App;
