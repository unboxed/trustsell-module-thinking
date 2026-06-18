import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Inter, self-hosted via next/font/local (variable woff2 in app/fonts/). Local —
// not next/font/google — because Google fetches at build time and fails silently
// in the docker dev build, swapping in a fallback with no error. Exposed as the
// --font-inter CSS variable, which globals.css maps to Tailwind's font-sans.
const inter = localFont({
  src: [
    { path: "./fonts/Inter-Variable.woff2", weight: "100 900", style: "normal" },
    {
      path: "./fonts/Inter-Variable-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sales Amplifier",
  description: "A living map of the modules.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
