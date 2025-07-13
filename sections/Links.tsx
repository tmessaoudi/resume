import { GitHubIcon, LinkedinIcon, MailIcon } from "../components/SVGIcons.tsx";

export default function Links() {
  return (
    <footer class="absolute bottom-0 mb-10 flex gap-4">
        <a href="https://github.com/tmessaoudi" ><GitHubIcon class="w-8 h-8" /></a>
        <a href="mailto:tmessaoudi94@gmail.com" ><MailIcon class="w-8 h-8" /></a>
        <a href="https://www.linkedin.com/in/tmessaoudi/" ><LinkedinIcon class="w-8 h-8" /></a>
        
        
    </footer>
  );
}
