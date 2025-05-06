import { useEffect } from "react";
import { Carousel } from "./Carousel";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="fixed flex justify-center top-0 left-0 w-screen h-full bg-[var(--color-overlay)] z-10 backdrop-blur-sm overflow-hidden items-center">
      <div className="my-1 relative flex flex-col lg:grid h-[95%] w-[95%] sm:max-w-[85%] lg:max-w-[95%] sm:max-h-[90%] lg:h-fit rounded-2xl overflow-hidden bg-[var(--color-dark-bg)] grid-cols-1 lg:grid-cols-8 ">
        {/* Carousel */}
        <div className="col-span-6">
          <Carousel images={project.images} path={project.id} />
        </div>

        {/* Content */}
        <div className="col-span-2">
          <article className="flex flex-col p-6 gap-4 lg:py-0 lg:mt-12 lg:mb-8">
            <h1 className="font-extrabold text-[var(--color-primary-dark)] dark:text-[var(--color-primary)] text-2xl sm:text-3xl">
              {project.title}
            </h1>

            <div className="flex items-center gap-2">
              {project.gitUrl && (
                <a
                  href={project.gitUrl}
                  className="justify-center p-3 pr-4 flex items-center gap-1 sm:gap-2 font-semibold text-sm text-[var(--color-muted)] dark:text-[var(--color-muted-light)] bg-[var(--color-overlay)] dark:bg-[var(--color-card-bg)] transition-colors rounded-lg hover:bg-[var(--color-primary-dark)] dark:hover:bg-[var(--color-primary-dark)] hover:text-[var(--color-background)] dark:hover:text-[var(--color-dark-bg)]"
                  target="_blank"
                >
                  {/* GitHub Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.previewUrl && (
                <a
                  href={project.previewUrl}
                  className="justify-center p-3 pr-4 flex items-center gap-1 sm:gap-2 font-semibold text-sm text-[var(--color-muted)] dark:text-[var(--color-muted-light)] bg-[var(--color-overlay)] dark:bg-[var(--color-card-bg)] transition-colors rounded-lg hover:bg-[var(--color-primary-dark)] dark:hover:bg-[var(--color-primary-dark)] hover:text-[var(--color-background)] dark:hover:text-[var(--color-dark-bg)]"
                  target="_blank"
                >
                  {/* View Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 3 21 3 21 9" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  View
                </a>
              )}
            </div>

            <p className="text-[var(--color-muted)] dark:text-[var(--color-muted-light)] text-sm mb-2">
              {project.description}
            </p>

            {project.technologies && (
              <div className="flex flex-col gap-3 mb-4">
                <h2 className="text-[var(--color-primary-dark)] dark:text-[var(--color-primary)] font-bold text-sm">
                  Technologies
                </h2>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-0 text-[var(--color-muted)] dark:text-[var(--color-muted-light)]">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech.name}
                      className="flex items-center gap-1 text-sm"
                    >
                      {tech.icon && (
                        <img
                          src={tech.icon}
                          alt={tech.name || "icon image"}
                          className="h-4 w-auto"
                          loading="lazy"
                        />
                      )}
                      {tech.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          {/* Close Button */}
          <button
            className="absolute top-3 right-3 p-2 bg-[var(--color-overlay)] lg:bg-transparent text-[var(--color-muted)] dark:text-[var(--color-muted-light)] hover:lg:bg-[var(--color-primary-dark)] dark:hover:lg:bg-[var(--color-primary-dark)] hover:lg:text-[var(--color-primary-dark)] dark:hover:lg:text-[var(--color-primary)] rounded-md transition-colors"
            onClick={onClose}
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
