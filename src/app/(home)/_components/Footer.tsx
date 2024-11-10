import Image from 'next/image';
import Link from 'next/link';

function SocialLink({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition-opacity"
    >
      <Image src={src} alt={alt} width={20} height={20} />
    </Link>
  );
}

const socialMediaLinks = [
  {
    href: 'https://facebook.com',
    src: '/images/icons/ic_facebook.svg',
    alt: '페이스북',
  },
  {
    href: 'https://twitter.com',
    src: '/images/icons/ic_twitter.svg',
    alt: '트위터',
  },
  {
    href: 'https://youtube.com',
    src: '/images/icons/ic_youtube.svg',
    alt: '유튜브',
  },
  {
    href: 'https://instagram.com',
    src: '/images/icons/ic_instagram.svg',
    alt: '인스타그램',
  },
];

function Footer() {
  return (
    <footer className="fixed bottom-0 flex flex-col w-full h-40 justify-between bg-[#111322] p-8">
      <div className="w-full flex justify-between">
        <p className="hidden tablet:block text-gray-500">@codeit - 2024</p>
        <div className="flex justify-between items-center gap-8">
          <Link
            href="/privacy-policy"
            className="text-[#676767] hover:text-gray-900"
          >
            Privacy Policy
          </Link>
          <Link
            href="/faq"
            className="text-gray-600 text-sm hover:text-gray-900"
          >
            FAQ
          </Link>
        </div>
        <div className="flex gap-3">
          {socialMediaLinks.map((link) => (
            <SocialLink
              key={link.alt}
              href={link.href}
              src={link.src}
              alt={link.alt}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-500 tablet:hidden">@codeit - 2024</p>
    </footer>
  );
}

export default Footer;
