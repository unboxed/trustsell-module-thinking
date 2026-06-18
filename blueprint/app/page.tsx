export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 p-8 text-center">
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        Sales Amplifier
      </p>
      <h1 className="text-2xl font-semibold tracking-tight">UI scaffold</h1>
      <p className="max-w-md text-sm text-muted-foreground">
        Next.js + Tailwind + shadcn/ui scaffold, ready to build on. The intent
        for this interface lives in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
          docs/ui-vision.md
        </code>
        .
      </p>
    </main>
  );
}
