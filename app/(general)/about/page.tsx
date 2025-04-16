import type { Metadata } from "next";

export const metadata: Metadata= {
 title: 'About Page',
 description: 'Esta es la pagina de precios de mi sitio web',
 keywords: ['About Page', 'Keywords'],
};

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <span className="text-5xl bg-red-400">About!</span>
        </div>
    );
    }