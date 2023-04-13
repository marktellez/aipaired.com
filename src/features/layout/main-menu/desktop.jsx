import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

export const DesktopMenu = ({ menuItems = [] }) => {
  return (
    <div className="flex items-center">
      <ul className="flex items-center justify-center space-x-4 text-sm flex-grow">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              <span className=" text-white font-medium tracking-wide cursor-pointer hover:text-pink-500 transition duration-300">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex ">
        <li>
          <Link href="mailto:hello@aipaired.com">
            <div className="flex items-center gap-1  cursor-pointer hover:text-pink-500 transition duration-300">
              <EnvelopeIcon className="w-3" />
              <span className="text-sm font-thin text-white tracking-wide hover:text-pink-500 transition duration-300 ">
                hello@aipaired.com
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
