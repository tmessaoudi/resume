

export default function Print() {
  return (
  <div class="flex gap-4 p-4 text-lg print:hidden">
    <a class="underline" download="Matvey's Resume" href="/resume.pdf">Download PDF</a>
    <button class="underline" onClick={() => globalThis.print()}>Print</button>
  </div>
  );
}


