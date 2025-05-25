/**
 * Header.tsx
 *
 * Displays the top section of the app:
 * - Store logo with link
 */

import logo from "../assets/logo.webp";

const Header = () => (
  <header className="sticky top-0 z-50 bg-white pt-4 pb-2 flex flex-col items-center justify-center shadow-sm">
    <a
      href="https://smartstore.naver.com/changbitfarm"
      target="_blank"
      rel="noopener noreferrer"
      className="mb-2"
    >
      <img
        src={logo}
        alt="창빛농원 로고"
        className="w-[140px] h-auto object-contain"
      />
    </a>
  </header>
);

export default Header;