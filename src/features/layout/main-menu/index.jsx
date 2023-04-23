import { DesktopMenu } from "./desktop";
import { MobileMenu } from "./mobile";

export const menuItems = [
  { name: "Articles on AI", href: "/articles" },
  { name: "About me", href: "/about" },
];

export const MainMenu = ({ menuItems }) => {
  return (
    <>
      <DesktopMenu {...{ menuItems }} />
      <MobileMenu {...{ menuItems }} />
    </>
  );
};
