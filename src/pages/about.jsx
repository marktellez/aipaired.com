import { Layout } from "@/features/layout";
import { Container } from "@/ui/page";
export default function AboutPage({}) {
  return (
    <Layout
      canonicalUrl="https://aipaired.com"
      title="About Me - Consultant in Software Engineering and AI with a Passion for Human Experience"
      metaDescription="Meet Marcus Tellez, the AI and software development consultant. Discover his unique journey to becoming a leading expert in the field, passionate about building innovative solutions and optimizing human experience. Learn more now!">
      <Container>
        <h1>Marcus Tellez - Sr. Software Engineer and AI Consultant</h1>

        <div className="flex items-center">
          <div>
            <a target="_blank" href="https://github.com/marktellez/marktellez">
              My Github
            </a>
          </div>
        </div>

        <h2>Introduction and Mission Statement</h2>
        <p>
          As a consultant in the software engineering and AI research field, my
          mission is to empower entrepreneurs and businesses to revolutionize
          their industries by harnessing the power of artificial intelligence
          and innovative software solutions.
        </p>
        <p>
          I strive to bridge the gap between my deep-rooted passion for
          programming and cutting-edge AI technology to elevate productivity,
          quality, and efficiency. By leveraging my unique ability to foresee
          obstacles and uncover novel solutions, I aim to be a catalyst for
          transformative change, driving progress and success for my clients in
          an ever-evolving digital landscape.
        </p>
        <h2>Early Life and Origins</h2>
        <p>
          Born in Mexico and brought to California at just nine months old, I
          was raised in an environment that instilled in me a strong work ethic
          and a passion for technology.
        </p>
        <p>
          Ever since I was a child, I've been fascinated by technology. I would
          disassemble and reassemble various devices, which, although not always
          pleasing to my father, taught me valuable lessons about documentation
          and troubleshooting. Inspired by the movie Terminator, I realized the
          importance of being proficient in technology and decided to dive into
          software development, teaching myself programming through trial and
          error.
        </p>
        <h2>Professional Background and Experience</h2>
        <p>
          At only 17, I landed my first paid programming job, working on a
          shopping cart system for a local San Diego businessman. This
          opportunity led to numerous other projects, and despite lacking a
          formal education, I became a successful contract coder. One of my most
          memorable experiences was working at Elon Musk's first company, where
          I had the opportunity to contribute to groundbreaking projects.
        </p>
        <p>
          My experience spans various industries, from solar engineering to AI
          gaming contests. I've always been passionate about taking on
          challenges, learning new skills, and pushing the boundaries of what's
          possible.
        </p>
        <h2>Expertise and Commitment to Learning</h2>
        <p>
          I am committed to staying up-to-date with the latest developments in
          AI and software engineering, regularly immersing myself in podcasts,
          articles, and YouTube videos from industry leaders. I have a strong
          understanding of technologies such as machine learning, deep learning,
          NLP, GANs, and reinforcement learning techniques.
        </p>
        <h2>Clientele and Services Offered</h2>
        <p>
          I work closely with project managers, entrepreneurs, and programmers,
          helping them achieve their goals through my expertise and experience.
          My clientele includes hundreds of satisfied customers, whom I've
          assisted through platforms like Codementor, DevmentorLive, and direct
          outreach.
        </p>
        <h2>Values and Philosophy</h2>
        <p>
          My approach to work is rooted in empathy and understanding, treating
          every client as a unique individual with their own needs, dreams, and
          desires. I optimize for human experience, ensuring accuracy in my
          estimates and communication. Drawing inspiration from stoic philosophy
          and historical figures, I've developed a resilient mindset that allows
          me to navigate the challenges of the digital world.
        </p>
        <h2> Personal Interests and Passions</h2>
        <p>
          Born in Mexico and raised in California, my unique background has
          taken me on a journey across the globe, including living in Holland,
          Bulgaria, India, and Denmark. In my spare time, I enjoy working with
          my hands, building wooden boats, furniture, and electronics, with a
          particular interest in Japanese carpentry. I also dedicate time to
          solving real-world engineering problems, such as creating sustainable
          housing and alternative technologies in off-grid areas. As an animal
          lover, I enjoy training dogs and horses when I'm not immersed in code
          and electronics.
        </p>

        <h2>Conclusion</h2>
        <p>
          I am dedicated to providing my clients with exceptional service and
          expertise, helping them navigate the rapidly changing world of
          software engineering and AI. If you're interested in collaborating on
          a project or seeking guidance in these fields, please don't hesitate
          to get in touch. Together, we can make a meaningful impact on the
          world.
        </p>

        <h3 className="text-2xl font-medium">You can find me on the web:</h3>
        <ul className="my-4 text-xl">
          <li>
            <a href="https://www.codementor.io/@marktellez">
              I mentor developers at Codementor
            </a>
          </li>
          <li>
            <a href="https://devmentor.live">
              Need a consultant? Find me at DevmentorLive
            </a>
          </li>
          <li>
            <a href="https://youtube.com/@aipaired">
              AI Paired Youtube Channel - Learn AI-Driven Programming
            </a>
          </li>
          <li>
            <a href="https://youtube.com/devmentor.live">
              DevmentorLive Youtube Channel - Learn ReactJS from an Expert
            </a>
          </li>
          <li>
            <a href="https://medium.com/@marcus-tellez">
              I write articles about Artificial Intelligence advancements at
              Medium
            </a>
          </li>
        </ul>
      </Container>
    </Layout>
  );
}
