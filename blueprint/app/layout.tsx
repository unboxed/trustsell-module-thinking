import type { Metadata } from "next";
import "./globals.css";

// No fonts wired up on purpose. The blueprint's mono + penciled serif are gone;
// the new type (see docs/ui-foundation.md) is the build's to set up.

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
