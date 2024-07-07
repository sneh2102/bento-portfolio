import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface Props {
  image?: string | StaticImageData;
}

const SkeletonMask = ({ image }: Props) => {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 items-center justify-center overflow-hidden rounded-[28px] border border-black/[0.2] border-slate-100 bg-black/[0.2] bg-neutral-300 dark:border-slate-900">
      {image && (
        <div className="relative h-[300px] w-[300px]">
          <Image
            src={image}
            alt="placeholder"
            layout="fill"
            objectFit="contain"
            className="rounded-[26px]"
            priority
          />
        </div>
      )}
    </div>
  );
};

export default SkeletonMask;
