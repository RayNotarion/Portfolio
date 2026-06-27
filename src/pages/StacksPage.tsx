import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import { HiOutlineBeaker } from "react-icons/hi";
import { frontEndStacks, backEndStacks, otherStacks, cmsStacks, devToolsStacks } from "@/constants/stacks";
import ToggleMode from "@/components/ToggleMode";

const categories = [
  { label: "Frontend", stacks: frontEndStacks },
  { label: "Backend", stacks: backEndStacks },
  { label: "AI & Productivity", stacks: otherStacks },
  { label: "CMS & No-Code", stacks: cmsStacks },
  { label: "Developer Tools", stacks: devToolsStacks },
];

const StacksPage = () => {
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 flex items-center gap-2">
            <HiOutlineBeaker className="w-6 h-6" />
            All Tech Stacks
          </h1>

          <div className="flex flex-col gap-8">
            {categories.map((cat, i) => (
              <div
                key={cat.label}
                className="animate-fade-slide-up border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-[#111111]"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {cat.label}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {cat.stacks.map((stack, j) => (
                    <div
                      key={j}
                      className="text-xs py-1.5 px-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-white dark:hover:text-black transition-all duration-200 text-gray-800 dark:text-gray-200"
                    >
                      {stack.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default StacksPage;
