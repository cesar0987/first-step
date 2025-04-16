import type { Metadata } from "next";

export const metadata: Metadata= {
 title: 'Contact Page',
 description: 'Esta es la pagina de precios de mi sitio web',
 keywords: ['Contact Page', 'Keywords'],
};

export default function ContactPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <span className="text-5xl">Contact!</span>
        </div>
    );
}