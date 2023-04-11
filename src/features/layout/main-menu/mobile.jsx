import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XIcon } from "@heroicons/react/24/outline";

export const MobileMenu = ({ menuItems = [] }) => {
  return (
    <Menu as="div" className="relative sm:hidden">
      {({ open }) => (
        <>
          <Menu.Button className="flex justify-end w-full p-2 text-sm font-medium text-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </Menu.Button>
          <Transition
            show={open}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <Menu.Items
              static
              className="fixed inset-0 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="flex justify-end p-2">
                <Menu.Button className="focus:outline-none">
                  <XIcon className="w-6 h-6" aria-hidden="true" />
                </Menu.Button>
              </div>
              <div className="px-1 py-2">
                {menuItems.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <Link href={item.href}>
                        <a
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } block px-4 py-2 text-sm`}>
                          {item.name}
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
