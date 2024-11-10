import Image from 'next/image';

interface SectionProps {
  flex_reverse?: boolean;
  badge: string;
  title1: string;
  title2: string;
  content1: string;
  content2: string;
  src: string;
  alt: string;
}

function Section({
  flex_reverse,
  badge,
  title1,
  title2,
  content1,
  content2,
  src,
  alt,
}: SectionProps) {
  return (
    <div
      className={`
        flex
        items-center
        gap-16
        h-[720px]
        ${flex_reverse ? 'flex-row-reverse justify-end text-right' : 'flex-row'}
      `}
    >
      <Image
        src={src}
        width={588}
        height={444}
        alt={alt}
        className="flex-shrink-0"
      />

      <div className="flex flex-col gap-3">
        <span className="font-bold text-[2rem] text-blue-400">{badge}</span>

        <p className="mb-2 font-bold text-[4.8rem] leading-[56px] tracking-[0.2px] text-gray-700">
          {title1}
          <br />
          {title2}
        </p>

        <p className="font-medium text-[2.4rem] leading-[2.8rem] tracking-[0.8px] text-gray-700">
          {content1}
          <br />
          {content2}
        </p>
      </div>
    </div>
  );
}

export default Section;
