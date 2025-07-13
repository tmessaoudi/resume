import Paragraph from "../sections/Paragraphs.tsx";
import WIP from "../sections/WIP.tsx";
import Links from "../sections/Links.tsx";
import Header from "../sections/Header.tsx";

export default function Home() {
  return (
    <>
      <WIP />
      <main class="px-4 py-8 flex">
        <div class="flex-1">
          <Header />
          <Links />
        </div>
        <Paragraph />
      </main>
    </>
  );
}
