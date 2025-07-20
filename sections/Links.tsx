import { GitHubIcon, LinkedinIcon, MailIcon, ResumeIcon } from "../components/SVGIcons.tsx";

export function Links() {
  return (
    <footer class="flex gap-4">
        <a href="https://github.com/tmessaoudi" ><GitHubIcon class="w-8 h-8" /></a>
        <a href="mailto:tmessaoudi94@gmail.com" ><MailIcon class="w-8 h-8" /></a>
        <a href="https://www.linkedin.com/in/tmessaoudi/" ><LinkedinIcon class="pt-1 w-8 h-8" /></a>
        <a href="/resume/en" ><ResumeIcon class="pt-0.5 w-9 h-9" /></a>
    </footer>
  );
}
