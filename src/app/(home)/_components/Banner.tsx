import Image from 'next/image';
import Link from 'next/link';

interface BannerProps {
  isButton?: Boolean;
  text1: string;
  text2?: string;
  text3?: string;
  src: string;
  alt: string;
}

function Banner({ isButton, text1, text2, text3, src, alt }: BannerProps) {
  return (
    <div className="w-screen h-[540px] tablet:h-[771px] pc:h-[540px] bg-blue-200 flex justify-center overflow-hidden pc:items-end">
      <div className="w-full h-full relative flex justify-center pc:w-[1110px] pc:h-[340px] pc:absolute  ">
        <div className="flex flex-col items-center text-center pt-12 gap-[18px] text-[2rem] font-bold z-10 tablet:pt-[84px] tablet:font-bold pc:w-[357px] tablet:text-[40px]">
          <p>
            {text1} <br className="tablet:hidden pc:block" />
            {text2}
          </p>
          <p className="pc:w-[357px]">{text3}</p>

          {isButton && (
            <Link href="/items">
              <button className="flex justify-center items-center w-60 h-14 bg-blue-400 rounded-[40px] font-semibold text-lg text-white tablet:w-[357px] tablet:text-xl">
                구경하러 가기
              </button>
            </Link>
          )}
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-[448px] overflow-auto pc:static pc:translate-x-0 pc:flex pc:justify-end">
          <Image
            src={src}
            width={746}
            height={340}
            alt={alt}
            className=" w-full h-auto pc:w-[746px] pc:h-[340px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
