/*import Link from "next/link";
import {type ReactNode} from "react"

type NavLinkProps={
    href : string
    children : ReactNode
}

function NavLink(props: NavLinkProps){
    return (
        <li className="text-white
        hover:text-red-500 mx-[15px]">
            <Link href={props.href}>{props.children}</Link>
        </li>
    )
}

export default function Navbar(){

    return (
    <nav className="bg-black">
        <ul className="list-none flex justify-center flex-wrap">
            
            <NavLink href="#contact"> Contact </NavLink>
            <NavLink href="#Experience"> Experience </NavLink>
            <NavLink href="#Skills"> Skilllkjhjks </NavLink>
            <NavLink href="#About"> About </NavLink>
            
        </ul>
    </nav>
    )
}
*/
import Link from "next/link";
import { type ReactNode } from "react";

type NavLinkProps = {
    href: string;
    children: ReactNode;
}

function NavLink(props: NavLinkProps) {
    return (
        <li className="text-white hover:text-blue-400 text-2xl">
            <Link href={props.href}>{props.children}</Link>
        </li>
    );
}

export default function Navbar() {
    return (
        <nav className="w-full bg-gray-900 py-4 px-4">
            <div className="max-w-2xl mx-auto bg-black rounded-full px-6 py-3">
                <ul className="list-none flex justify-around items-center">
                    <NavLink href="#top">🏠</NavLink>
                    <NavLink href="#explore">🧭</NavLink>
                    <NavLink href="#search">🔍</NavLink>
                </ul>
            </div>
        </nav>
    );
}