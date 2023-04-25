import NextLink from "next/link";

function Link({ children, href, className = "", color }) {
  let style;
  switch (color) {
    case "gray":
      style = "text-gray-600 hover:text-pink-500";
      break;
    default:
      style = "text-blue-700 hover:text-pink-500";
  }
  return (
    <NextLink href={href}>
      <a className={`transition duration-300 ${style} ${className}`}>
        {children}
      </a>
    </NextLink>
  );
}
export default Link;
