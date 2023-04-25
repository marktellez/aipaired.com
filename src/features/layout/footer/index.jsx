import Link from "ui/link";
import { EnvelopeOpenIcon } from "@heroicons/react/20/solid";
import { Container } from "@/ui/page";
import { menuItems } from "@/features/layout/main-menu";

export function Footer({}) {
  return (
    <footer className="border-t py-3 mt-10">
      <Container>
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center text-xs gap-2">
          <div className="text-xs text-gray-400">
            &copy; 2022-{new Date().getFullYear()} AI Paired, llc
          </div>

          <ul className="flex-grow items-center justify-center space-x-4 flex">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <span className=" font-medium tracking-wide cursor-pointer hover:text-pink-500 transition duration-300">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-gray-400">
            {/* <EnvelopeOpenIcon className="w-5 " /> */}
            hello@aipaired.com
          </div>
          <Link href="/privacy" color="gray">
            Privacy and cookies policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
