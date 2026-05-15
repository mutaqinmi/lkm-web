import Link from "next/link";
import type { MouseEvent } from 'react';

export default function TopNavbar() {
    const handleHashLink = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        e.stopPropagation();
        const el = document.getElementById(id);
        if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
        }
    };

    return (
        <div className="w-full fixed top-0 flex justify-center bg-white/50 backdrop-blur-lg z-10">
            <div className="w-3/4 flex py-4 items-center justify-between">
                <Link className="font-serif font-bold" href="/">Kelompok 14</Link>
                <ul className="flex gap-6 font-serif">
                    <li><Link href="/" className="hover:underline">Beranda</Link></li>
                    <li><Link href="/#materi" className="hover:underline" onClick={(e)=>handleHashLink(e,'materi')}>Materi</Link></li>
                    <li><Link href="/#tentang" className="hover:underline" onClick={(e)=>handleHashLink(e,'tentang')}>Tentang</Link></li>
                </ul>
            </div>
        </div>
    )
}