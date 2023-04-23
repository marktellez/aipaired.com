import Link from "next/link";
import Image from "next/image";

import { Container } from "@/ui/page";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";

export const MobileMenu = ({ menuItems = [] }) => {
  if (!menuItems.length) return "";
  return (
    <Menu as="Fragment" className="sm:hidden">
      {({ open, close }) => (
        <>
          <Transition
            show={open}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 "
            enterTo="opacity-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Menu.Items className="fixed inset-0 bg-white z-50">
              <div className="">
                <div className=" flex justify-center my-4">
                  <XCircleIcon className="w-8" onClick={close} />
                </div>
                <div className="w-full text-2xl px-2 text-center my-4">
                  AI-Driven Development
                </div>
                {menuItems.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <Link href={item.href}>
                        <a
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } block px-4 py-2 text-2xl text-center`}>
                          {item.name}
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
          <nav className="w-full fixed top-0 z-40 text-white bg-gray-900 bg-opacity-70 backdrop-blur-md sm:p-1 sm:rounded-b-xl">
            <Container>
              <div className="flex items-center justify-between">
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

                <div className="flex items-center w-full z-40">
                  <Menu.Button
                    aria-label="Mobile menu"
                    className="flex justify-end w-full p-2 text-sm font-medium text-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <Bars3Icon
                      className="w-6 h-6"
                      aria-hidden="true"
                      alt="mobile menu icon"
                    />
                  </Menu.Button>
                </div>
              </div>
            </Container>
          </nav>
        </>
      )}
    </Menu>
  );
};
