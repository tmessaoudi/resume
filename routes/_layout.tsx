import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="flex">
      <nav class="flex flex-col print:hidden">
        <a href="/">Home</a>
        <a href="/resume/english">Resume</a>
      </nav>
      <div class="flex-grow">

      <Component />
      </div>
    </div>
  );
}