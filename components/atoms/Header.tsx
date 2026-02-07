// components/Header.tsx
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { headerLinks } from "@/data";

const Header = () => {
    const pathname = usePathname();
    const loginLink = headerLinks.find(link => link.title === "Login") || headerLinks[0];

    return (
        <header className="z-50 w-full shadow-md bg-white px-4 md:px-8 lg:px-14">
            <div className="flex items-center justify-between py-3">
                {/* Logo + Title */}
                <div className="flex items-center gap-2">
                    <div className="relative h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 ">
                        <Image
                            src="/heart.svg"
                            fill
                            alt="CupidDraw logo"
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">
                        CupidDraw
                    </h1>
                </div>

                {/* Desktop Navigation - all links */}
                <nav className="hidden lg:flex items-center gap-2">
                    <ul className="flex items-center gap-2">
                        {headerLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={link.href}
                                    className={`
                    px-5 py-2.5 text-base font-medium rounded-md transition-colors
                    ${pathname === link.href
                                            ? "bg-rose-50 text-rose-900 font-semibold"
                                            : "text-gray-700 hover:text-rose-800 hover:bg-rose-50"
                                        }
                  `}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile: only Login link */}
                <div className="lg:hidden">
                    <Link
                        href={loginLink.href}
                        className="px-5 py-2.5 text-base font-medium transition-colors"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;