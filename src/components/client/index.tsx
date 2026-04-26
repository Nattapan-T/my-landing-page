import AmazonLogo from "../../assets/Amazon_logo.png";
import CocaColaLogo from "../../assets/Coca-Cola_logo.png";
import FedExLogo from "../../assets/FedEx_Express.png";
import IBMLogo from "../../assets/IBM_logo.png";
import WalmartLogo from "../../assets/Walmart_logo.png";

const logos = [AmazonLogo, CocaColaLogo, FedExLogo, IBMLogo, WalmartLogo];

function Client() {
  return (
    <section id="clients" className="mt-24 px-6 md:px-14">
      <h3 className="text-sm font-normal text-gray-400 text-center mb-10">
        Already loved and trusted by product team
      </h3>

      <div className="grid grid-cols-2 md:grid-auto-fit gap-x-10 gap-y-8 max-w-4xl mx-auto">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="client logo"
            className="h-8 w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        ))}
      </div>
    </section>
  );
}
export default Client;
