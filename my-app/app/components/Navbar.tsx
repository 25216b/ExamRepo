import Link from "next/link";
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