type ProductCardProps = {
  imageSrc: string;
  alt: string;
  href: string;
};

const ProductCard = ({ imageSrc, alt, href }: ProductCardProps) => (
  <div className="flex flex-col items-center space-y-1">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={imageSrc} alt={alt} className="w-24 h-24 object-cover rounded shadow" />
    </a>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg bg-green-600 text-white px-3 py-1 rounded"
    >
      구매하기
    </a>
  </div>
);

export default ProductCard;
