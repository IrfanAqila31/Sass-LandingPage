import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-26 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className=" text-3xl font-bold text-slate-900">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 mt-4">
            Discover how our users are achieving their goals with our platform
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialsCard
            name="John Doe"
            role="Startup Founder"
            message="NexaFlow has completely transformed how our team collaborates."
            avatar="https://randomuser.me/api/portraits/men/32.jpg"
            rating={4}
          />

          <TestimonialsCard
            name="Sarah Lee"
            role="Product Manager"
            message="The analytics features are incredibly powerful and easy to use."
            avatar="https://randomuser.me/api/portraits/women/44.jpg"
            rating={5}
          />

          <TestimonialsCard
            name="Michael Tan"
            role="Software Engineer"
            message="A must-have tool for modern teams. Clean, fast, and reliable."
            avatar="https://randomuser.me/api/portraits/men/55.jpg"
            rating={5}
          />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
