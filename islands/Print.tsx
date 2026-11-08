type PrintProps = {
  pdf: string;
  filename: string;
  downloadLabel: string;
  printLabel: string;
  otherHref: string;
  otherLabel: string;
};

export default function Print({ pdf, filename, downloadLabel, printLabel, otherHref, otherLabel }: PrintProps) {
  return (
    <div class="flex gap-4 p-4 text-lg print:hidden">
      <a class="underline" download={filename} href={pdf}>{downloadLabel}</a>
      <button type="button" class="underline" onClick={() => globalThis.print()}>{printLabel}</button>
      <a class="underline" href={otherHref}>{otherLabel}</a>
    </div>
  );
}
