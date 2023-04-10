import Link from "next/link";
import { Container } from "@/ui/page";

export const MainMenu = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Articles", href: "/articles" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 text-white bg-gray-900 bg-opacity-70 backdrop-blur-md p-1 rounded-b-xl">
      <Container>
        <div className="flex items-center ">
          <div className="flex items-center  gap-2">
            <span className="whitespace-nowrap text-3xl font-hero">
              AI Paired
            </span>
            <img
              src="/images/header/yt-logo.png"
              className="w-10 rounded-full"
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <ul className="flex space-x-4 text-sm ">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <span className="uppercase text-white font-medium tracking-wide cursor-pointer hover:text-pink-500 transition duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="mailto:hello@aipaired.com">
                  <span className="text-white font-medium tracking-wide cursor-pointer hover:text-pink-500 transition duration-300">
                    hello@aipaired.com
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default MainMenu;
