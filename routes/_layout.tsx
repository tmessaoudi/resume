import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="flex">
      <div class="flex-grow">

      <Component />
      </div>
    </div>
  );
}