import Link from 'next/link';
import Image from "next/image";

import Logo from '@/assets/logo.png'

export default function AppHeader() {
    return (
        <header>
            <Link href="">
                <Image src={Logo} alt="logo"/>
                NextLevel Food
            </Link>

            <nav>
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
    );
}