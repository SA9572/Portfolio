import React from "react";
import { achievements } from "../../constants";

const Achievements = () => {
  return (
    <section
      id="achievement"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Competitive programming and problem-solving milestones across LeetCode,
          GeeksforGeeks and Codolio.
        </p>
      </div>

      {/* Achievements Timeline (based on Experience layout) */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {achievements.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle with platform logo */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={item.img}
                alt={item.platform}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Card */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="flex items-center space-x-6">
                {/* Platform Logo */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.platform}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Platform and Title */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {item.platform}
                    </h4>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[#8245ec] text-sm font-medium">
                {item.problemsSolved}
              </p>
              <p className="mt-2 text-gray-400 text-sm">{item.description}</p>
              {item.profile && (
                <a
                  href={item.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-[#8245ec] hover:text-purple-400 font-semibold text-sm transition-colors"
                >
                  View Profile →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

