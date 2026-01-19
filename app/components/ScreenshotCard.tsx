import Image from 'next/image';
import Link from 'next/link';
import { ScreenshotItem } from '../mockData';

interface ScreenshotCardProps {
  item: ScreenshotItem;
  href?: string;
}

export default function ScreenshotCard({ item, href }: ScreenshotCardProps) {
  // Remove all hover effects for Web3/MetaMask, AI/ChatGPT, Productivity/Obsidian, Fintech/Revolut, and Travel/Tripadvisor items
  const isStaticCard = item.category === 'Web3' || item.category === 'AI' || item.category === 'Productivity' || item.category === 'Fintech' || item.category === 'Travel';
  
  const cardContent = (
    <>
      <div className="relative w-full" style={{ aspectRatio: '9/19.5' }}>
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover"
          sizes="280px"
        />
      </div>
      {!isStaticCard && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-sm font-medium truncate">{item.name}</p>
        </div>
      )}
    </>
  );

  const cardClassName = `relative w-[280px] flex-shrink-0 overflow-hidden rounded-xl bg-white border border-border-light ${isStaticCard ? '' : 'group transition-shadow hover:shadow-lg'}`;

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={cardClassName}>
      {cardContent}
    </div>
  );
}
