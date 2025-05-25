/**
 * ProductCard component
 *
 * Renders a product image and a "Buy" button
 * linking to an external product URL. Used in recommendation sections.
 */

type ProductCardProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
  href: string;
};

const ProductCard = ({ imageSrc, title, subtitle, href }: ProductCardProps) => (
  <div className="flex flex-col gap-3 pb-3">
    <div
      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
      style={{ backgroundImage: `url(${imageSrc})` }}
    ></div>
    <div>
      <p className="text-[#131712] text-base font-medium">
        {title}
      </p>
      <p className="text-[#6d8566] text-sm font-normal">
        {subtitle}
      </p>
    </div>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center justify-center
        w-full max-w-[480px] px-4 h-10 rounded-full
      bg-[#50d22c] text-[#131712] text-sm font-bold
        cursor-pointer"
    >
      구매하기
    </a>
  </div>
);

export default ProductCard;
