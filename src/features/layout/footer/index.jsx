import Link from "next/link";
import { EnvelopeOpenIcon } from "@heroicons/react/20/solid";
import { Container } from "@/ui/page";

export function Footer({}) {
  return (
    <footer className="">
      <Container>
        <div className="sm:flex items-start gap-1 w-full">
          <div className="sm:flex flex-col w-full gap-4 mt-24">
            <div className="px-6 text-white flex items-center gap-2 justify-end">
              <EnvelopeOpenIcon className="w-5 " />
              <div className="font-thin">hello@aipaired.com</div>
            </div>

            <div className="w-full bg-purple-500 rounded-full h-1" />
            <div className="sm:px-6 sm:flex gap-10">
              <div className="flex-grow">
                &copy; 2022-{new Date().getFullYear()} AI Paired, llc
              </div>
              <div className="">
                <a name="contact"></a>
                hello@aipaired.com
              </div>
              <div>
                <Link href="/privacy">privacy and cookies policy</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
