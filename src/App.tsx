import Hero from "./components/hero";
import Menu from "./components/menu";
import Client from "./components/client";
import chartImage from "./assets/77bed93c22cc94457124aff6df696718c0c77f3c.png";
import Feature from "./components/feature";

function App() {
  return (
    <div className="min-h-screen flex flex-col pb-20 ">
      <Menu />
      <main className="flex-1 px-6 md:px-14">
        <Hero />
        <section className="pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
          <div className="mx-auto max-w-4xl">
            <img
              className="w-full h-auto shadow-sm ring-1 ring-gray-200"
              src={chartImage}
              alt="Chart"
            />
          </div>
        </section>
        <Client />
        <Feature />
      </main>
    </div>
  );
}

export default App;
