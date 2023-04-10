const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <MainMenu />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">About Us</h2>
          <p className="mt-4 text-lg text-gray-500">
            We are a team of AI and software engineering experts who are driven
            to automate tasks and processes using innovative tools like GPT-4.
            Our focus is on making AI our primary business operation, with
            software development taking a secondary priority.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Web and software development can be a complex and challenging task.
            Timelines are missed, budgets are overrun, there are simply too many
            bugs, and technical debt can stall progress indefinitely. These are
            common issues that every business faces when it comes to
            development.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            At our company, we believe that it doesn’t have to be this way. We
            take an iterative and generative approach that involves daily
            deployments, weekly progress checkpoints, and a philosophy of “plan
            a little, build a little, deploy a little, demo a little, and
            invoice and collect payment for a little”. Our process is based on a
            tight feedback cycle that allows us to minimize bugs, manage budgets
            effectively, and deliver high-quality solutions on time.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            When you choose to work with us, you'll own your code and
            intellectual property from day one. There are no large deposits, no
            endless meetings, and no wasted time. Instead, we create a visual
            and text based behavioral blueprint which acts like a contract. Our
            team of experienced engineers is here to help you get started with
            your project. We offer an introductory conversation where we can
            discuss your needs and requirements in detail. This conversation is
            free of charge and comes with no obligation. Moreover, we'll even
            provide you with a transcript of the call afterward, including
            summaries and deliverables, thanks to our use of AI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "For Developers", href: "/developers" },
  { name: "For Entrepreneurs", href: "/entrepreneurs" },
  { name: "For Companies", href: "/companies" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export function MainMenu() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto ">
        {/* Mobile menu */}
        <Menu as="div" className="sm:hidden flex flex-row-reverse w-full">
          {({ open, close }) => (
            <>
              <Menu.Button className="inline-flex items-center justify-start p-2 rounded-md text-gray-500 focus:outline-none ">
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Menu.Button>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="inset-0 absolute bg-white focus:outline-none">
                  <div className="flex flex-row-reverse w-full">
                    <Menu.Button className="inline-flex items-center justify-start p-2 rounded-md text-gray-500 focus:outline-none ">
                      <XCircleIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                        onClick={close}
                      />
                    </Menu.Button>
                  </div>
                  <div className="">
                    {navigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={`${
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700"
                            } block px-4 py-2 text-sm`}>
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
