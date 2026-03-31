import { CheckIcon } from "./icons/CheckIcon";
import HeroAbstract from "./images/hero-abstract.webp";

import { Button } from "../../components/ui/Button";

const bullets = [
  "Minimum 5K image resolution",
  "Various format variants available",
  "Retina display support"
];

function HeroSection() {
  return (
    <section className='mx-auto flex max-w-304 flex-col items-center justify-center gap-12 px-3 py-12 md:gap-16 md:px-4 md:py-16 lg:flex-row lg:px-0 lg:py-24'>
      <div className='flex h-fit w-full flex-col justify-start gap-8 align-middle md:gap-16 lg:max-w-122'>
        <div className='flex h-fit w-full flex-col gap-8 md:gap-16'>
          <h1 className='md:text-5 h-fit w-full text-4xl font-semibold text-neutral-900 md:text-5xl lg:text-6xl'>
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
        <div className='flex w-full max-w-114.5 gap-4 md:gap-8 lg:max-w-95.75'>
          <Button
            variant='secondary'
            size='2xl'
            className='order-2 md:order-1'
          >
            Learn more
          </Button>
          <Button
            variant='primary'
            size='2xl'
            className='order-1 md:order-2'
          >
            See pricing
          </Button>
        </div>
      </div>
      <div className='relative h-66 w-77.75 rounded-lg md:h-131.5 md:w-176 lg:w-174'>
        <img
          src={HeroAbstract}
          alt='Hero Abstract'
          loading='eager'
          className='h-full w-full rounded-lg object-contain'
        />
      </div>
    </section>
  );
}

export { HeroSection };
