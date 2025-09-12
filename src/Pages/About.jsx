import React from "react";
import {
  ChartBarIcon,
  UserGroupIcon,
  LightBulbIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

const aboutData = [
  {
    icon: ChartBarIcon,
    title: "Proven Results",
    description:
      "Track record of helping established businesses achieve sustainable growth through strategic marketing initiatives.",
    color: "text-blue-500",
  },
  {
    icon: UserGroupIcon,
    title: "Business Owner Mindset",
    description:
      "I understand the entrepreneurial spirit and the desire to continuously improve and expand your business operations.",
    color: "text-green-500",
  },
  {
    icon: LightBulbIcon,
    title: "Strategic Approach",
    description:
      "Custom strategies tailored to your business goals, target market, and growth objectives.",
    color: "text-yellow-500",
  },
  {
    icon: ComputerDesktopIcon,
    title: "Modern Solutions",
    description:
      "Cutting-edge digital marketing techniques combined with timeless business principles.",
    color: "text-purple-500",
  },
];

function About() {
  return (
    <section id="about" className="about py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="about-content text-center mb-12">
          <div className="section-header">
            <h2 className="text-3xl font-bold mb-4">Why Business Owners Choose Me</h2>
            <p className="text-gray-600">
              I understand the challenges of running a successful business and
              the ambition to grow further.
            </p>
          </div>
        </div>

        <div className="about-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="about-card p-6 bg-white shadow rounded-lg">
                <Icon className={`card-icon w-12 h-12 mx-auto mb-4 ${item.color}`} />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
