import Link from "next/link";
import Image from "next/image";

import { Container } from "@/ui/page";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

export const DesktopMenu = ({ menuItems = [] }) => {
  return (
    <div className="hidden sm:flex sm:h-[50px]">
      <nav className="w-full fixed  left-0 top-0 z-50 text-white bg-gray-900 bg-opacity-70 backdrop-blur-md sm:p-1 sm:rounded-b-xl">
        <Container>
          <div className="w-full flex items-center justify-between">
            <Link href={"/"}>
              <div className="flex items-center gap-2 cursor-pointer ">
                <div className="flex gap-2 items-center">
                  <div className="relative w-10 h-10 -mb-1">
                    <Image
                      src="/images/header/logo.png"
                      layout="fill"
                      alt="AIPaired.com logo"
                    />
                  </div>
                  <div className="whitespace-nowrap text-2xl font-hero pt-1">
                    AI Paired
                  </div>
                </div>
              </div>
            </Link>

            <div className="sm:flex items-center sm:flex-grow">
              <ul className=" items-center justify-center space-x-4 text-sm flex-grow hidden sm:flex">
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
              <ul className="hidden sm:flex">
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
          </div>
        </Container>
      </nav>
    </div>
  );
};
