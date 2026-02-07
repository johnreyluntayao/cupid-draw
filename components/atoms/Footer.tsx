
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-b from-pink-50 to-white border-t border-pink-100">
      <div className="mx-auto px-8 md:px-10 lg:px-14 py-10 md:py-12">
        {/* Main footer content - 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center md:text-left">
          {/* Brand + Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-3">
              <div className="relative h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 flex-shrink-0">
                <Image
                  src="/heart.svg"
                  fill
                  alt="CupidDraw logo"
                  className="object-contain"
                />
              </div>
              <h1 className="text-base md:text-lg lg:text-xl font-bold text-black">
                CupidDraw
              </h1>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              Secret Valentine's Day gift exchanges for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-800 mt-1.5 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Made with */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-800 mt-1.5 mb-4">
              Made with
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              <span className="text-xl">♥</span> for Valentine's Day
            </p>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CupidDraw. Made for the Philippines{" "}
            <span role="img" aria-label="Philippines flag">
              🇵🇭
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;