const footerLinks = [
  {
    title: "Product",
    links: ["Changelog", "Customer Stories", "Security", "Pricing", "Solution"],
  },
  {
    title: "Company",
    links: ["Changelog", "Customer Stories", "Security", "Pricing", "Solution"],
  },
  {
    title: "Resource",
    links: ["Changelog", "Customer Stories", "Security", "Pricing", "Solution"],
  },
  {
    title: "Features",
    links: ["Changelog", "Customer Stories", "Security", "Pricing", "Solution"],
  },
  {
    title: "Solutions",
    links: ["Changelog", "Customer Stories", "Security", "Pricing", "Solution"],
  },
];

function PreFooter() {
  return (
    <section className="mt-24 px-6 md:px-14 border-t border-gray-100 pt-16">
      <div className="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
        {footerLinks.map((col, i) => (
          <div key={i} className="flex flex-col gap-4">
            <h4 className="font-bold text-gray-900">{col.title}</h4>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PreFooter;
