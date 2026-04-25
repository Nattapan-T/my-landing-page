import product1 from "../../assets/image 1.png";
import product2 from "../../assets/image 2.png";

interface ShowcaseItem {
  image: string;
  title: string;
  description: string;
}

function ShowcaseCard({
  item,
  textTop = true,
}: {
  item: ShowcaseItem;
  textTop?: boolean;
}) {
  return (
    <div className={`flex flex-col ${textTop ? "" : "md:flex-col-reverse"}`}>
      <div className="py-8 text-center md:text-start">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 mx-auto md:mx-0">
          {item.title}
        </h3>
        <p className="text-md text-gray-400 md:max-w-64 mx-auto md:mx-0 leading-relaxed">
          {item.description}
        </p>
      </div>
      <img src={item.image} alt={item.title} className="h-auto w-auto mb-4" />
    </div>
  );
}

function Showcase() {
  const showcaseItems: ShowcaseItem[] = [
    {
      image: product1,
      title: "Make the best hire in half the time",
      description:
        "Move faster on a recruting platform that automated and manual tasks like scheduling interviews and getting approvals",
    },
    {
      image: product2,
      title: "Make the best hire in half the time",
      description:
        "Move faster on a recruting platform that automated and manual tasks like scheduling interviews and getting approvals",
    },
  ];

  const mobileList = [...showcaseItems, ...showcaseItems];
  const desktopList = [...showcaseItems, ...showcaseItems.toReversed()];

  return (
    <section id="showcase" className="mt-24 px-6 md:px-14 scroll-mt-24">
      <div className="mx-auto mt-16 max-w-4xl">
        <div className="grid grid-cols-1 gap-y-14 md:hidden">
          {mobileList.map((item, i) => (
            <ShowcaseCard key={i} item={item} />
          ))}
        </div>

        <div className="hidden md:grid grid-cols-2 gap-x-8 gap-y-14">
          {desktopList.map((item, i) => (
            <ShowcaseCard key={i} item={item} textTop={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
