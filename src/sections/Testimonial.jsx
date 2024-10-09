import { testimonials } from "../constants/index.jsx";
import Card from "../components/Card.jsx";

const Testimonial = () => {
  return (
    <section className="w-[95%] lg:w-9/12 mx-auto mt-3">
      <div className="flex justify-center items-center gap-3 flex-wrap">
        {testimonials.map(({ image, name, desc }) => (
          <Card
            key={desc}
            image={image}
            name={name}
            desc={desc}
            additionalClassName={"px-3 py-3"}
          />
        ))}
      </div>
    </section>
  );
};
export default Testimonial;
