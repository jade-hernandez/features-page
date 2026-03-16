import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { cn } from "../../utils/utils";

type TTestimonialCardProps = {
  name: string;
  username: string;
  testimonial: string;
  imageUrl: string;
  maxTestimonialLength?: number;
  gridOrder?: number;
};

const MAX_TESTIMONIAL_LENGTH = 180;

export default function TestimonialCard({
  name,
  username,
  testimonial,
  imageUrl,
  maxTestimonialLength = MAX_TESTIMONIAL_LENGTH,
  gridOrder
}: TTestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isTruncated = testimonial.length > maxTestimonialLength;
  const animationTrigger = useRef(null);

  useEffect(() => {
    if (animationTrigger.current) {
      autoAnimate(animationTrigger.current, {
        duration: 150,
        easing: "ease-in-out",
        disrespectUserMotionPreference: true
      });
    }
  }, []);

  const displayedText =
    isExpanded || !isTruncated ? testimonial : `${testimonial.slice(0, maxTestimonialLength)}...`;

  return (
    <div
      className={cn(
        gridOrder === 1 && "lg:order-1",
        gridOrder === 2 && "lg:order-2",
        gridOrder === 3 && "lg:order-3",
        "h-fit w-full max-w-[384px] rounded-lg border border-neutral-200 bg-white px-4 py-6 leading-6 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)]"
      )}
    >
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-4'>
          <img
            src={imageUrl}
            alt={`Profile picture of ${name}`}
            width={48}
            height={48}
            className='aspect-square w-12 shrink-0 rounded-full bg-gray-100 object-cover'
          />
          <div className='flex min-w-0 flex-col gap-px'>
            <h2 className='truncate text-lg font-semibold text-neutral-900'>{name}</h2>
            <span className='truncate text-sm text-neutral-600'>{username}</span>
          </div>
        </div>

        <div
          ref={animationTrigger}
          className='flex flex-col gap-2 overflow-hidden'
        >
          <p className='break-break-words origin-top text-base leading-6 font-normal text-neutral-600'>
            {displayedText}
          </p>
          {isTruncated && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className='m-0 p-0 text-sm font-medium text-neutral-500 hover:text-neutral-700'
            >
              <span className='flex items-center justify-end gap-1'>
                {isExpanded ? "Show less" : "Show more"}
                {isExpanded ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
