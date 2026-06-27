import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants/projects";
import ToggleMode from "@/components/ToggleMode";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full items-center bg-background text-foreground">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 xl:px-4">
        <div className="flex items-center justify-between pt-8 xl:px-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <HiArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <ToggleMode />
        </div>

        <main className="py-8 xl:px-16">

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-10">
            All Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectsPage;
