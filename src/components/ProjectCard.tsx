import type { Projects } from "@/types";

interface ProjectCardProps {
  project: Projects;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title} in a new tab`}
      className="block border-b border-gray-200 dark:border-gray-700 pb-6 hover:opacity-80 transition-opacity"
    >
      <h3 className="text-base font-semibold text-gray-900 dark:text-white">
        {project.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        {project.description}
      </p>
      <span className="inline-block mt-3 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 text-xs font-mono rounded text-gray-700 dark:text-gray-300">
        {project.domainName}
      </span>
    </a>
  );
};

export default ProjectCard;
