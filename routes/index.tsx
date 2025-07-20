import { AboutMe } from "../sections/AboutMe.tsx";
import { Header } from "../sections/Header.tsx";
import { Experiences } from "../sections/Experiences.tsx";
import { SideProjects } from "../sections/SideProjects.tsx";
import {Contact} from "../sections/Contact.tsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">

      <Header/>
      <main>
        <AboutMe/>
        <Experiences />
        <SideProjects />
        <Contact />
      </main>
    </div>
  );
}
