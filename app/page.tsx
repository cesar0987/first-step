import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <span className="text-5xl">Hola Mundo!</span>
      <Link href={"/about"} className="text-blue-500 hover:underline mt-4">About</Link>
    </div>
  );
}
