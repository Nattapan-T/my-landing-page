import { useState } from "react";

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-gray-50 rounded-2xl px-6 py-4 cursor-pointer hover:bg-gray-100 transition-colors group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-base text-gray-800">{question}</h3>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:text-gray-900 group-hover:scale-110 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-96 mt-4" : "max-h-0"}`}
      >
        <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! You can try us for free for 30 days. No credit card required — just sign up and start exploring all features immediately.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately.",
  },
  {
    question: "How does billing work?",
    answer:
      "You are billed monthly or annually depending on your chosen plan. Annual billing saves you up to 20% compared to monthly billing.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel at any time with no cancellation fees. Your account will remain active until the end of your current billing period.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. All data is encrypted in transit and at rest. We are SOC 2 Type II certified and GDPR compliant.",
  },
];
function FAQ() {
  return (
    <section
      id="faq"
      className="mt-28 px-6 md:px-14 flex flex-col items-center gap-5"
    >
      <h2 className="text-3xl md:text-4xl text-gray-900 text-center font-medium">
        Frequently asked questions
      </h2>
      <p className="text-gray-400 text-sm md:text-lg  text-center">
        Everything you need to know about the jehadin.
      </p>
      <div className="w-full max-w-2xl flex flex-col gap-6 mt-6">
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

export default FAQ;
