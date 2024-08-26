import Link from 'next/link';
import Image from "next/image";

import Logo from '@/assets/logo.png'

import classes from './appheader.module.css'
import HeaderBackground from "@/components/AppHeader/HeaderBackground";
import NavLink from "@/components/AppHeader/NavLink";

export default function AppHeader() {
    return (
        <>
            <HeaderBackground />
            <header className={classes.header}>
                <Link href="/public" className={classes.logo}>
                    <Image src={Logo} alt="logo"/>
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}