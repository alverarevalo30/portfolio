"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Years of experience",
    value: "1",
    postfix: "+",
  },
  {
    metric: "Projects completed",
    value: "7",
  },
  {
    metric: "Lines of code written",
    value: "50000",
    postfix: "+",
  },
  {
    metric: "Hours spent coding",
    value: "1000",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className=" px-4 xl:gap-16 py-8 sm:py-12 md:py-16 xl:px-16">
      <div className="text-center sm:border-[var(--color-border)] sm:border rounded-md py-8 px-8 md:px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[var(--color-muted)] text-base">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
