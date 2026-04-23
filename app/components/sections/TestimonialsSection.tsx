import { testimonials } from "../data";

type TestimonialsSectionProps = {
  testimonialIndex: number;
  testimonialTransition: "idle" | "exiting" | "entering";
  onSelect: (index: number) => void;
};

export function TestimonialsSection({
  testimonialIndex,
  testimonialTransition,
  onSelect,
}: TestimonialsSectionProps) {
  const active = testimonials[testimonialIndex];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        <h2 className="testimonials__title">Don&apos;t Take Our Word For It</h2>
        <div className="testimonial-cardWrap">
          <article className={`testimonial-card testimonial-card--${testimonialTransition}`}>
            <div className="testimonial-card__glow" aria-hidden="true" />
            <div className="testimonial-card__icon" aria-hidden="true">“</div>
            <p className="testimonial-card__quote">{active.quote}</p>
            <div className="testimonial-card__footer">
              <div className="testimonial-card__identity">
                <span className="testimonial-card__avatar">{active.initials}</span>
                <div className="testimonial-card__authorBlock">
                  <strong className="testimonial-card__name">{active.name}</strong>
                  <span className="testimonial-card__title">{active.title}</span>
                </div>
              </div>
              <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
            </div>
          </article>

          <div className="testimonial-nav" aria-label="Testimonial navigation">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                className={`testimonial-nav__dot ${index === testimonialIndex ? "is-active" : ""}`}
                type="button"
                aria-pressed={index === testimonialIndex}
                onClick={() => onSelect(index)}
              />
            ))}
          </div>

          <div className="testimonial-pills" aria-label="Testimonial authors">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                className={`testimonial-pill ${index === testimonialIndex ? "is-active" : ""}`}
                type="button"
                onClick={() => onSelect(index)}
              >
                {testimonial.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
