import React from "react";

const ProjectCard = ({ imgUrl, title, shortDescription, onClick }) => {
  return (
    <div
      className="border-2 border-[var(--color-card-bg)] rounded-xl cursor-pointer flex flex-col h-full"
      onClick={onClick}
    >
      <div
        className="h-52 md:h-72 rounded-t-xl relative"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex flex-col text-white rounded-b-xl bg-[var(--color-card-bg)] py-6 px-4 flex-1">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-[var(--color-muted)]">{shortDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
