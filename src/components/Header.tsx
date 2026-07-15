import ProfileImage from "../assets/images/gallery/profile.png";
import { ReactComponent as VerifiedCheck } from "../assets/svg/verified-check.svg";
import { ReactComponent as Location } from "../assets/svg/location.svg";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { personalLinks } from "../constants/personal";
import ToggleMode from "./ToggleMode";

const Header = () => {
  return (
    <header className="w-full h-auto flex justify-between items-center pt-8 lg:pt-12 xl:px-16 text-gray-900 dark:text-white">
      <div className="flex gap-4 lg:gap-6 w-full sm:w-auto">
        <div className="flex-shrink-0">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-40 h-36 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-38 xl:h-38 rounded-lg object-cover"
          />
        </div>

        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center w-full gap-2">
              <h3 className="text-lg lg:text-2xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                Raymund Notarion
                <VerifiedCheck className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
              </h3>
              <div className="sm:hidden flex-shrink-0">
                <ToggleMode />
              </div>
            </div>
            <h5 className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
              <Location className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              Paniqui, Tarlac, Philippines
            </h5>
            <h4 className="text-xs lg:text-sm font-medium text-gray-800 dark:text-gray-300 mt-1">
              Software Developer \ Web Developer
            </h4>
          </div>
          <div className="flex mt-3 gap-2">
            <a
              href={personalLinks.resume}
              download="Raymund_Notarion_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 lg:h-9 px-3 lg:px-4 bg-black dark:bg-white text-white dark:text-black font-medium text-xs lg:text-sm rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <IoNewspaperOutline className="w-3 h-3 lg:w-4 lg:h-4" />
              Resume
              <FaAngleRight className="w-3 h-3" />
            </a>
            <a
              href={personalLinks.email}
              className="h-8 lg:h-9 px-4 lg:px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium text-xs lg:text-sm rounded-lg hover:opacity-80 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <IoIosSend className="w-6 h-3 lg:w-4 lg:h-4" />
              Send Email
            </a>
          </div>
        </div>
      </div>

      <div className="hidden sm:block">
        <ToggleMode />
      </div>
    </header>
  );
};

export default Header;