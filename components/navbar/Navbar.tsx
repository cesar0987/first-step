import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
    {path: '/contact', label: 'Contact'},
    {path: '/about', label: 'About'},
    {path: '/pricing', label: 'Pricing'},
];

export const Navbar = async() => {
    console.log('Navbar Creado');
  return (
    <nav>
        <Link href="/">
            <HomeIcon />
            Home
        </Link>
        {navItems.map((navItem) => (
           <ActiveLink key={navItem.path} {...navItem} />
        ))}
    </nav>
  )
}
