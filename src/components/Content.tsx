import { HiOutlineBriefcase } from "react-icons/hi2";
import { experienceData } from "../constants/experience";
import { HiOutlineBeaker } from "react-icons/hi";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { IoIosLink } from "react-icons/io";
import { MdOutlineVideoLibrary } from "react-icons/md";
import {
  backEndStacks,
  frontEndStacks,
  otherStacks,
} from "../constants/stacks";
import { projects } from "../constants/projects";
import GalleryViewer from "@/components/GalleryViewer";
import { galleryData } from "@/constants/gallery";
import { HiOutlinePhotograph } from "react-icons/hi";
import { socialLinks } from "../constants/socials";
import { Link } from "react-router-dom";


const Content = () => {
  return (
    <div className="w-full h-auto mt-6 lg:mt-8 flex flex-col gap-5 lg:gap-6 pb-8 xl:px-16">
      {/* Row 1: About + Experience Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
        {/* About Section - Left Column */}
        <div className="lg:col-span-7">
          <div className="border border-gray-200 dark:border-gray-700 py-5 px-5 rounded-xl h-full bg-white dark:bg-[#111111]">
            <h3 className="text-md font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
              <HiOutlineBriefcase className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              About
            </h3>

            <div className="flex flex-col gap-3 mt-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-loose">
                I am a Computer Science graduate with a passion for web
                development and building practical digital solutions. I have
                hands-on experience developing web applications, managing
                databases, and automating workflows using Laravel, PHP,
                JavaScript, MySQL, Kotlin, and Firebase. I enjoy learning new
                technologies and continuously improving my skills by building
                projects and exploring modern development practices.
              </p>

              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-loose">
                During my academic journey and on-the-job training, I worked on
                projects that strengthened my problem-solving, analytical
                thinking, and teamwork. At DSWD, I developed a real-time Excel
                data synchronization system that streamlined reporting, reduced
                manual work, and improved workflow efficiency. These experiences
                taught me the importance of writing clean, maintainable code
                while building reliable software.
              </p>

              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-loose">
                I am passionate about learning, solving real-world problems, and
                creating applications that make a positive impact. My goal is to
                grow as a Full-Stack Web Developer, contribute to meaningful
                projects, and build reliable, user-focused solutions that deliver
                real value.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section - Right Column */}
        <div className="lg:col-span-5">
          <div className="border border-gray-200 dark:border-gray-700 py-5 px-5 rounded-xl h-full bg-white dark:bg-[#111111]">
            <h3 className="text-md font-semibold flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
              <HiOutlineBriefcase className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1.25 top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

              {/* Timeline items */}
              <div className="space-y-4">
                {experienceData.map((exp, index) => (
                  <div key={index} className="relative flex items-start gap-4">
                    {/* Timeline dot */}
                    <div
                      className={`w-3 h-3 rounded-full z-10 shrink-0 transition-colors duration-200 ${
                        exp.current
                          ? "bg-black dark:bg-white"
                          : "bg-gray-300 dark:bg-gray-600 dark:hover:bg-white"
                      }`}
                    ></div>

                    {/* Content */}
                    <div className="flex-1 flex justify-between items-start min-w-0">
                      <div className="min-w-0 flex-1 pr-2">
                        <h4 className="text-sm font-bold text-black dark:text-white">
                          {exp.jobTitle}
                        </h4>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                          {exp.companyName}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 shrink-0">
                        {exp.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Tech Stack - Full Width */}
      <div className="border border-gray-200 dark:border-gray-700 py-5 px-5 rounded-xl bg-white dark:bg-[#111111]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-md font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
            <HiOutlineBeaker className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            Tech Stack
          </h3>
          <Link
            to="/stacks"
            className="text-sm font-bold text-gray-900 dark:text-white hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <div>
            <h4 className="text-sm text-gray-800 dark:text-gray-200 font-medium mb-3">
              Frontend
            </h4>
            <div className="flex flex-wrap gap-2">
              {frontEndStacks.map((stack, index) => (
                <div
                  key={index}
                  className="text-xs py-1.5 px-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-white dark:hover:text-black transition-all duration-200 text-gray-800 dark:text-gray-200"
                >
                  {stack.name}
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h4 className="text-sm text-gray-800 dark:text-gray-200 font-medium mb-3">
              Backend
            </h4>
            <div className="flex flex-wrap gap-2">
              {backEndStacks.map((stack, index) => (
                <div
                  key={index}
                  className="text-xs py-1.5 px-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-white dark:hover:text-black transition-all duration-200 text-gray-800 dark:text-gray-200"
                >
                  {stack.name}
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div>
            <h4 className="text-sm text-gray-800 dark:text-gray-200 font-medium mb-3">
              AI & Productivity
            </h4>
            <div className="flex flex-wrap gap-2">
              {otherStacks.map((stack, index) => (
                <div
                  key={index}
                  className="text-xs py-1.5 px-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-white dark:hover:text-black transition-all duration-200 text-gray-800 dark:text-gray-200"
                >
                  {stack.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Beyond Coding + Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
        {/* Beyond Coding Section */}
        <div className="border border-gray-200 dark:border-gray-700 py-5 px-5 rounded-xl bg-white dark:bg-[#111111]">
          <h3 className="text-md font-semibold flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
            <IoIosLink className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            Social Links
          </h3>
          <div className="flex flex-col gap-3">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111111] hover:opacity-80 hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <IconComponent className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors shrink-0" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-5 lg:gap-6">
          <div className="border border-gray-200 dark:border-gray-700 py-5 px-5 rounded-xl bg-white dark:bg-[#111111]">
            <h3 className="text-md font-semibold flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
              <MdOutlineVideoLibrary className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              Beyond Coding
            </h3>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-loose">
              When not writing code, I enjoy staying active and entertained. I'm
              passionate about <strong className="text-gray-900 dark:text-white">Watching anime</strong>,{" "}
              <strong className="text-gray-900 dark:text-white">basketball</strong>, and{" "}
              <strong className="text-gray-900 dark:text-white">online gaming</strong>. These activities
              help me maintain a healthy work-life balance and provide a great way to
              unwind and relax.
            </p>
          </div>

          {/* Projects Section */}
          <div className="border border-gray-200 dark:border-gray-700 py-5 px-5 rounded-xl bg-white dark:bg-[#111111]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-md font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
                <HiOutlineFolderOpen className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                Recent Projects
              </h3>
              <Link
                to="/projects"
                className="text-sm font-bold text-gray-900 dark:text-white hover:underline"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.slice(0, 4).map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} in a new tab`}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:opacity-80 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer bg-white dark:bg-[#111111]"
                >
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <span className="inline-block mt-2 bg-gray-100 dark:bg-[#1a1a1a] px-2 py-1 text-xs rounded text-gray-700 dark:text-gray-300">
                    {project.domainName}
                  </span>
                    <span className="inline-block mt-2 ml-2 bg-gray-100 dark:bg-[#1a1a1a] px-2 py-1 text-xs rounded text-gray-600 dark:text-gray-400">
                      Not Hosted
                    </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 4: Gallery Section */}
      <div className="border border-gray-200 dark:border-gray-700 py-5 px-5 rounded-xl bg-white dark:bg-[#111111]">
        <h3 className="text-md font-semibold flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
          <HiOutlinePhotograph className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          Gallery
        </h3>

        <GalleryViewer items={galleryData} />
      </div>
    </div>
  );
};

export default Content;
