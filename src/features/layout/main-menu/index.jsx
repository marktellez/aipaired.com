import { DesktopMenu } from "./desktop";
import { MobileMenu } from "./mobile";

export const menuItems = [
  { name: "Articles on AI", href: "/articles" },
  { name: "About me", href: "/about" },
];

export const MainMenu = ({}) => {
  return (
    <>
      <div className="hidden sm:block">
        <DesktopMenu {...{ menuItems }} />
      </div>
      <div className="block sm:hidden">
        <MobileMenu {...{ menuItems }} />
      </div>
    </>
  );
};
