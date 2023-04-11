import Image from "next/image";
import Link from "next/link";
import { Container } from "@/ui/page";

import { DesktopMenu } from "./desktop";
import { MobileMenu } from "./mobile";

export const menuItems = [];

export const MainMenu = () => {
  return (
    <nav className="w-full fixed top-0 z-50 text-white bg-gray-900 bg-opacity-70 backdrop-blur-md sm:p-1 sm:rounded-b-xl">
      <Container>
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <div className="flex items-center gap-2 cursor-pointer ">
              <div className="flex gap-2 items-center">
                <div className="relative w-8 h-8">
                  <Image
                    src="/images/header/logo.png"
                    layout="fill"
                    alt="AIPaired.com | Ethical AI Powered Consulting"
                  />
                </div>
                <div className="whitespace-nowrap text-2xl font-hero pt-1">
                  AI Paired
                </div>
              </div>
            </div>
          </Link>
          <div className="w-full">
            <DesktopMenu {...{ menuItems }} />
            <MobileMenu {...{ menuItems }} />
          </div>
        </div>
      </Container>
    </nav>
  );
};
