import Hero from "./components/hero";
import Menu from "./components/menu";
import Client from "./components/client";
import Feature from "./components/feature";
import RequestDemo from "./components/request-demo";
import Showcase from "./components/showcase";
import chartImage from "./assets/77bed93c22cc94457124aff6df696718c0c77f3c.png";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Menu />
      <main className="flex-1 px-6 md:px-14">
        <Hero />
        <section className="mt-10 md:mt-16">
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
        <RequestDemo />
        <Showcase />
      </main>
    </div>
  );
}

export default App;
