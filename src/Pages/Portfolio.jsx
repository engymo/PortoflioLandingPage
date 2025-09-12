import React from "react";

function Portfolio() {
  // Data Array
  const portfolioData = [
    {
      title: "Manufacturing Company",
      description:
        "Haylo helped us increase our B2B sales by 180% through strategic marketing initiatives and lead generation systems.",
      results: [
        { text: "+180% Sales Growth", color: "text-green-700 bg-green-100" },
        { text: "+250% Lead Quality", color: "text-rose-700 bg-rose-100" },
      ],
      cardBg: "bg-green-50 border-brown-200",
    },
    {
      title: "Professional Services",
      description:
        "The strategic approach and understanding of our business challenges made all the difference in our expansion.",
      results: [
        { text: "+150% Client Base", color: "text-green-700 bg-green-100" },
        { text: "+300% Online Presence", color: "text-brown-700 bg-brown-100" },
      ],
      cardBg: "bg-rose-50 border-brown-200",
    },
    {
      title: "Retail Business",
      description:
        "Finally found a marketing partner who understands the pressures and opportunities of running a growing business.",
      results: [
        { text: "+200% Revenue", color: "text-rose-700 bg-rose-100" },
        { text: "+120% Customer Retention", color: "text-green-700 bg-green-100" },
      ],
      cardBg: "bg-brown-50 border-rose-200",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-rose-600">
            Success Stories
          </h2>
          <p className="mt-3 text-lg text-brown-700">
            Real results from real business partnerships
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioData.map((item, index) => (
            <div
              key={index}
              className={`${item.cardBg} rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300 border`}
            >
              <h3 className="text-xl font-semibold text-brown-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 italic mb-5">{item.description}</p>
              <div className="flex flex-col gap-2">
                {item.results.map((res, i) => (
                  <span
                    key={i}
                    className={`${res.color} font-semibold px-3 py-1 rounded-full w-fit`}
                  >
                    {res.text}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
