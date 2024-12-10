import React, { useState } from "react";

export default function FAQdiv() {
  const faqs = [
    {
      question: "What credit score do I need to apply for a credit card?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      question: "How can I apply for a credit card online?",
      answer:
        "You can apply for a credit card online by visiting the card issuer's website, comparing available cards, and filling out a secure application form with your personal and financial information.",
    },
    {
      question: "Are there any annual fees associated with the credit card?",
      answer:
        "Annual fees vary by card. Some cards have no annual fee, while premium cards may charge anywhere from $95 to $695 annually. The fee is typically waived for the first year on many cards.",
    },
    {
      question:
        "How long does it take to receive the credit card once approved?",
      answer:
        "Once approved, you typically receive your credit card within 7-10 business days. Some issuers offer expedited delivery for an additional fee.",
    },
    {
      question: "How can I check my credit card balance and transactions?",
      answer:
        "You can check your balance and transactions through your online banking account, mobile app, monthly statements, or by calling your card issuer's customer service number.",
    },
    {
      question: "What should I do if my credit card is lost or stolen?",
      answer:
        "Immediately contact your card issuer to report the loss or theft. They will cancel your card and issue a new one. You're typically not liable for unauthorized charges.",
    },
    {
      question: "Is my credit card information secure?",
      answer:
        "Yes, credit card issuers use advanced encryption and security measures to protect your information. Additionally, federal law limits your liability for unauthorized charges.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10">
          <div className="w-6 h-6 text-green-500">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.645 9.355L24 12L14.645 14.645L12 24L9.355 14.645L0 12L9.355 9.355L12 0Z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-20 right-20">
          <div className="w-8 h-8 text-green-500">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.645 9.355L24 12L14.645 14.645L12 24L9.355 14.645L0 12L9.355 9.355L12 0Z" />
            </svg>
          </div>
        </div>

        {/* Curved Line */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <svg
            className="absolute top-0 right-0 w-full h-full text-green-500/20"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <path
              d="M0,1000 C300,800 700,800 1000,1000"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="max-w-[1020px] mx-auto relative">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b">
                <button
                  className="flex  justify-between w-full text-left text-white hover:text-green-400 py-4 transition duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-[24px] font-bold">{faq.question}</span>
                  <span className="text-white text-2xl font-bold hover:text-green-400">
                    {openIndex === index ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-[200px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="text-gray-300 pb-4">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
