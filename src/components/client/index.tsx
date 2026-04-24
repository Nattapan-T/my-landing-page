import AmazonLogo from "../../assets/Amazon_logo.png";
import CocaColaLogo from "../../assets/Coca-Cola_logo.png";
import FedExLogo from "../../assets/FedEx_Express.png";
import IBMLogo from "../../assets/IBM_logo.png";
import WalmartLogo from "../../assets/Walmart_logo.png";

const logos = [AmazonLogo, CocaColaLogo, FedExLogo, IBMLogo, WalmartLogo];

function Client() {
  return (
    <section className="px-6 py-10">
      <h3 className="text-md font-normal text-gray-400 text-center mb-8">
        Already loved and trusted by product team
      </h3>

      <div className="grid grid-auto-fill gap-x-10 gap-y-8 max-w-4xl mx-auto">
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
