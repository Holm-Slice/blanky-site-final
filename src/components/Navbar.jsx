import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  console.log(location.pathname);

  const linkClasses =
    "text-blanky-red float-right ml-2 sm:ml-4 md:ml-6 mr-2 sm:mr-4 md:mr-9 mt-0.5 pr-3 sm:pr-5 md:pr-7 pt-0.5 bg-blanky-yellow no-underline transition-all duration-2000 ease-in-out hover:text-blanky-yellow hover:shadow-blanky-hover-extended";
  const activeClasses =
    "text-blanky-dark pr-3 sm:pr-6 md:pr-9 pl-1 sm:pl-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl no-underline transition-all duration-2000 ease-in-out hover:bg-blanky-yellow hover:text-blanky-yellow hover:shadow-blanky-hover-extended";

  return (
    <nav className="p-1 top-0 left-0 w-full bg-blanky-yellow z-50 font-custom2 pb-3 sm:pb-4 md:pb-6">
      {/* Mobile Layout - Stacked */}
      <div className="md:hidden">
        <div className="flex justify-center px-2">
          <img
            src={"/assets/true-assets/Website-Files/Blanky-Pastel-Trans.PNG"}
            alt="Blanky-logo"
            className="h-auto mt-2 sm:mt-3 pt-2 sm:pt-3 pb-2 sm:pb-3 w-full max-w-[200px] sm:max-w-[280px] transition-all duration-2500 ease-in-out transform hover:rotate-1 hover:scale-105 hover:opacity-70"
          />
        </div>
        <ul className="list-none p-0 m-0 flex flex-row-reverse gap-1 sm:gap-2 pb-1 font-custom2 text-xs sm:text-sm px-2">
          <li>
            <Link
              className={
                location.pathname === "/shows" ? activeClasses : linkClasses
              }
              to={"/shows"}
            >
              SHOWS
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/music" ? activeClasses : linkClasses
              }
              to={"/music"}
            >
              MUSIC
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/" ? activeClasses : linkClasses
              }
              to={"/"}
            >
              HOME
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Layout - Inline */}
      <div className="hidden md:flex md:items-center md:justify-between px-4 lg:px-8 xl:px-12">
        <div className="md:ml-48">
          <img
            src={"/assets/true-assets/Website-Files/Blanky-Pastel-Trans.PNG"}
            alt="Blanky-logo"
            className="h-auto mt-5 pt-5 pb-5 w-full max-w-[350px] lg:max-w-[420px] xl:max-w-[490px] transition-all duration-2500 ease-in-out transform hover:rotate-1 hover:scale-105 hover:opacity-70"
          />
        </div>
        <ul className="list-none p-0 m-0 flex flex-row-reverse gap-2 font-custom2 text-base lg:text-xl xl:text-2xl">
          <li>
            <Link
              className={
                location.pathname === "/shows" ? activeClasses : linkClasses
              }
              to={"/shows"}
            >
              SHOWS
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/music" ? activeClasses : linkClasses
              }
              to={"/music"}
            >
              MUSIC
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/" ? activeClasses : linkClasses
              }
              to={"/"}
            >
              HOME
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
