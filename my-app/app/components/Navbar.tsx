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


/*
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
    */

'use client'

import Link from "next/link";
import { type ReactNode, useState } from "react";

type NavLinkProps = {
    href?: string;
    onClick?: () => void;
    children: ReactNode;
}

function NavLink(props: NavLinkProps) {
    if (props.onClick) {
        return (
            <li className="text-white hover:text-blue-400 text-2xl cursor-pointer">
                <button onClick={props.onClick}>{props.children}</button>
            </li>
        );
    }
    
    return (
        <li className="text-white hover:text-blue-400 text-2xl">
            <Link href={props.href!}>{props.children}</Link>
        </li>
    );
}

export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchText, setSearchText] = useState('');

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            console.log('Recherche:', searchText);
            // Tu pourras appeler ta fonction de recherche ici
        }
    };

    return (
        <nav className="sticky top-0 w-full py-4 px-4 z-50">
            <div className="max-w-2xl mx-auto bg-black rounded-full px-6 py-3 relative shadow-lg">
                <ul className="list-none flex justify-around items-center">
                    <NavLink href="#top">🏠</NavLink>
                    
                    <NavLink onClick={() => setShowSearch(!showSearch)}>
                        ➕
                    </NavLink>
                    
                    <NavLink href="#search">🔍</NavLink>
                </ul>

                {/* Search dropdown */}
                {showSearch && (
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 bg-gray-800 rounded-lg p-3 shadow-xl">
                        <input 
                            type="text" 
                            placeholder="Search..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            onKeyDown={handleSearch}
                            className="w-full bg-gray-700 text-white rounded-full px-4 py-2 outline-none"
                            autoFocus
                        />
                    </div>
                )}
            </div>
        </nav>
    );
}