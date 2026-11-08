import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="flex">
      <div class="flex-grow">
        <Component />
      </div>
    </div>
  );
}
