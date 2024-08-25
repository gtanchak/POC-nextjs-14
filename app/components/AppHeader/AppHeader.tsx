import Link from 'next/link';
import Image from "next/image";

import Logo from '@/assets/logo.png'

import classes from './appheader.module.css'
import HeaderBackground from "@/app/components/AppHeader/HeaderBackground";

export default function AppHeader() {
    return (
        <>
            <HeaderBackground />
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image src={Logo} alt="logo"/>
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies community</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}