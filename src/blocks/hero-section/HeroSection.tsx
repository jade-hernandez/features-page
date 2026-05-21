import { ImageWithPlaceholder } from "../../components/image-with-placeholder/ImageWithPlaceholder";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import { Button } from "../../components/ui/Button";

import { CheckIcon } from "./icons/CheckIcon";

import HeroAbstractMobile from "./images/hero-abstract-mobile.webp";
import HeroAbstractTablet from "./images/hero-abstract-tablet.webp";
import HeroAbstractDesktop from "./images/hero-abstract-desktop.webp";

import { HERO_MOBILE_BLUR, HERO_TABLET_BLUR, HERO_DESKTOP_BLUR } from "./images/blur-data";

const bullets = [
  "Minimum 5K image resolution",
  "Various format variants available",
  "Retina display support"
];

function HeroSection() {
  const breakpoint = useMediaQuery();

  return (
    <section
      aria-labelledby='hero-heading'
      className='mx-auto flex max-w-[calc(100%-1.5rem)] flex-col items-center justify-center gap-12 py-12 md:max-w-[calc(100%-2rem)] md:gap-8 md:py-16 xl:flex-row xl:py-24'
    >
      <div className='flex h-fit w-full flex-col justify-start gap-8 align-middle md:gap-16 xl:max-w-122'>
        <div className='flex h-fit w-full flex-col gap-8 md:gap-16'>
          <h1
            id='hero-heading'
            className='h-fit w-full text-4xl font-semibold text-neutral-900 md:text-5xl xl:text-6xl'
          >
            Premium abstract images
          </h1>
          <ul className='flex flex-col items-start gap-5'>
            {bullets.map((desc, index) => (
              <li
                key={index}
                className='flex flex-row gap-3 align-middle text-lg font-normal text-neutral-600'
              >
                <CheckIcon />
                {desc}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex w-full max-w-114.5 gap-4 md:gap-8 xl:max-w-95.75'>
          <Button
            variant='secondary'
            size={breakpoint !== "mobile" ? "2xl" : "xl"}
            className='order-2 md:order-1'
          >
            Learn more
          </Button>
          <Button
            variant='primary'
            size={breakpoint !== "mobile" ? "2xl" : "xl"}
            className='order-1 md:order-2'
          >
            See pricing
          </Button>
        </div>
      </div>
      <ImageWithPlaceholder
        imgClassNames='md:h-131.5 lg:max-w-174'
        altText='An abstract representation of premium design'
        images={{
          mobileImagePlaceholder: HERO_MOBILE_BLUR,
          tabletImagePlaceholder: HERO_TABLET_BLUR,
          desktopImagePlaceholder: HERO_DESKTOP_BLUR,
          mobileImage: HeroAbstractMobile,
          tabletImage: HeroAbstractTablet,
          desktopImage: HeroAbstractDesktop
        }}
      />
    </section>
  );
}

export { HeroSection };
