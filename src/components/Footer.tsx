/**
 * Footer.tsx
 *
 * Displays the footer section of the app.
 * Contains:
 * - A link to the Smart Store
 * - Copyright text
 */

const Footer = () => (
  <div className="w-full text-base max-w-md text-center text-gray-500 py-4">
    <a
      href="https://smartstore.naver.com/changbitfarm"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-600 hover:underline block mb-1"
    >
      원예용품 쇼핑몰 바로가기
    </a>
    <span>© 2025 창빛농원. 무단 복제 및 전재 금지</span>
  </div>
);

export default Footer;