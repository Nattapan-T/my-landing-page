import {
  ChartBarIcon,
  ChatBubbleLeftIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const featureItems = [
  {
    icon: ChartBarIcon,
    title: "Rich Analytics",
    description:
      "Easy data management with a dedicated admin panel and a developer platform to extend what Polio CRM can do.",
  },
  {
    icon: ChatBubbleLeftIcon,
    title: "Rich Analytics",
    description:
      "Easy data management with a dedicated admin panel and a developer platform to extend what Polio CRM can do.",
  },
  {
    icon: CodeBracketIcon,
    title: "Rich Analytics",
    description:
      "Easy data management with a dedicated admin panel and a developer platform to extend what Polio CRM can do.",
  },
];

function Feature() {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm text-blue-500">feature</p>
        <h2 className="text-3xl font-semibold text-gray-900">
          You will never missed a deadline
        </h2>
        <p className="mx-auto max-w-sm leading-relaxed text-gray-400 text-lg md:text-sm">
          Connect expose and visualize and over 150 Sass tools without
          engineering method
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-14">
        {[...featureItems, ...featureItems].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex flex-col items-center text-center">
              <Icon className="h-8 w-8 text-blue-500 mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Feature;
