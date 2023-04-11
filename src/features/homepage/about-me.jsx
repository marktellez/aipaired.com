import Image from "next/image";

export function HomepageAboutMe({}) {
  return (
    <div className="border-t">
      <div className="flex flex-col sm:flex-row  items-center gap-10">
        <div className="sm:w-1/2 mx-16 sm:mx-auto justify-center items-center gap-10">
          <div className="flex justify-center">
            <Image
              src="/images/marcus-avatar.png"
              alt="Marcus Tellez"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="sm:w-1/2">
          <h2>
            Marcus Tellez{" "}
            <span className="text-sm">Sr. Developer and AI Researcher</span>
          </h2>
          <p className="">
            Marcus Tellez is a highly skilled software developer and AI expert
            with over 25 years of experience in the industry. Since 1997, Marcus
            has been providing cutting-edge software solutions and AI consulting
            services to clients across various sectors, including construction,
            finance, and language industries.
          </p>
          <p className="">
            His expertise in AI and software development, along with a strong
            dedication to delivering high-quality solutions, has made him a
            sought-after consultant and thought leader in the field. With a
            passion for innovation and a keen eye on the ethical implications of
            AI, Marcus is dedicated to shaping the future of artificial
            intelligence in a responsible and sustainable manner.
          </p>
        </div>
      </div>
    </div>
  );
}
