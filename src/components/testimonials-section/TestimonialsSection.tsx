import testimonialsData from "./testimonials-data";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className='mx-auto flex max-w-full flex-col gap-12 rounded-md bg-white px-3 py-12 md:gap-16 md:px-4 md:py-16 lg:p-24'>
      <header className='flex flex-col gap-5 px-8 text-center'>
        <div className='flex flex-col gap-3'>
          <p className='text-xl font-semibold text-indigo-700'>Testimonials</p>
          <p className='text-3xl font-semibold text-neutral-900 md:text-5xl'>
            Countless users, countless smiles
          </p>
        </div>
        <p className='text-lg font-normal text-neutral-600 md:text-xl'>
          Explore our community&#39;s journey and discover why satisfaction defines us.
        </p>
      </header>
      <div className='grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.username}
            gridOrder={(index % 3) + 1}
            {...testimonial}
          />
        ))}
      </div>
    </section>
  );
}
