import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <div className="flex items-center justify-between px-6 w-full h-[70px]">
      <Link href="/">
        <Image src="/images/Img_logo.png" width={151} height={51} alt="로고" />
      </Link>
      <Link
        href="/login"
        className="flex items-center justify-center w-32 h-12 bg-brand-blue text-white font-bold rounded-lg text-base"
      >
        로그인
      </Link>
    </div>
  );
}

export default Header;
