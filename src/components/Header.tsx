/**
 * Header.tsx
 *
 * Displays the top section of the app:
 * - Store logo with link
 * - Main application title
 */

import logo from "../assets/logo.webp";

const Header = () => (
  <header className="text-center my-4">
    <a
      href="https://smartstore.naver.com/changbitfarm"
      target="_blank"
      rel="noopener noreferrer"
      className="block mb-2"
    >
      <img
        src={logo}
        alt="창빛농원"
        className="w-[178px] h-[40px] object-contain mx-auto"
      />
    </a>
    <h1 className="text-3xl font-bold text-green-900 mb-6">
      🌱 분갈이 흙 계산기
    </h1>
  </header>
);

export default Header;