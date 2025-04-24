import "../globals.css";
import { Navbar } from "@/components";
export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />    
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      {children}
    </main>
    </>

  );
}