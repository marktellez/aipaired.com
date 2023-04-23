import Link from "next/link";
import { EnvelopeOpenIcon } from "@heroicons/react/20/solid";
import { Container } from "@/ui/page";
import { menuItems } from "@/features/layout/main-menu";

export function Footer({}) {
  return (
    <footer className="">
      <Container>
        <div className="sm:flex items-start w-full text-sm">
          <div className="sm:flex flex-col w-full mt-24">
            <div className="px-6 text-white flex items-center gap-2 justify-end">
              <EnvelopeOpenIcon className="w-5 " />
              <div className="font-thin">hello@aipaired.com</div>
            </div>

            <div className="w-full bg-purple-500 rounded-full h-1" />
            <div className=" sm:flex gap-10 py-3">
              <div className="">
                &copy; 2022-{new Date().getFullYear()} AI Paired, llc
              </div>
              <ul className="flex-grow items-center justify-center space-x-4 text-sm flex">
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

              <div className="">
                <a name="contact"></a>
                hello@aipaired.com
              </div>
              <div>
                <Link href="/privacy">Privacy and cookies policy</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
