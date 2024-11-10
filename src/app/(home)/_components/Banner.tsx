import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
  isButton?: Boolean;
  text1: string;
  text2: string;
  src: string;
  alt: string;
}

function Banner({ isButton, text1, text2, src, alt }: BannerProps) {
  return (
    <div className="w-screen h-[540px] bg-blue-200 flex justify-center overflow-hidden">
      <div className="w-full h-[540px] relative flex justify-center">
        <div className="flex flex-col items-center text-center pt-12 gap-[18px] text-[2rem] font-bold z-10">
          <p>
            {text1} <br className="tablet:hidden pc:block" />
            {text2}
          </p>

          {isButton && (
            <Link href="/items">
              <button className="flex justify-center items-center w-60 h-14 bg-blue-400 rounded-[40px] font-semibold text-lg text-white">
                구경하러 가기
              </button>
            </Link>
          )}
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-[448px] overflow-auto">
          <Image
            src={src}
            width={996}
            height={447}
            alt={alt}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
