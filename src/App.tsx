import Menu from "./components/menu/index.tsx";
import Hero from "./components/hero/index.tsx";
import Client from "./components/client/index.tsx";
import Feature from "./components/feature/index.tsx";
import RequestDemo from "./components/request-demo/index.tsx";
import Showcase from "./components/showcase/index.tsx";
import GrowTogether from "./components/grow-together/index.tsx";
import FAQ from "./components/faq/index.tsx";
import PreFooter from "./components/prefooter/index.tsx";
import Footer from "./components/footer/index.tsx";
import chartImage from "./assets/77bed93c22cc94457124aff6df696718c0c77f3c.png";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Menu />
      <main className="flex-1">
        <Hero />
        <section className="mt-10 md:mt-16 px-6 md:px-14">
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
        <GrowTogether />
        <FAQ />
        <PreFooter />
        <Footer />
      </main>
    </div>
  );
}

export default App;
