import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components";
export default function AboutLayout({
 children,
 metadata
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />    
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1>Hello Root Layout About</h1>
      {children}
    </main>
    </>

  );
}