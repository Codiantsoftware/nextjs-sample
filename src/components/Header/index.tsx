/**
 * @file This file contains the Header component
 * @module Header
 */
import Link from "next/link";
import DropdownUser from "./DropdownUser";
import Image from "next/image";

/**
 * Header component representing the top navigation bar.
 * @param {object} props - React props for the component.
 * @param {string | boolean | undefined} props.sidebarOpen - State for opening/closing sidebar.
 * @returns {JSX.Element} React component.
 */
const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">

        <div className="hidden sm:block">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative">

              <Link href={"/"}>
                <Image
                  width={32}
                  height={32}
                  src={"/images/logo/logo-icon.svg"}
                  alt="Logo"
                />
              </Link>
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
