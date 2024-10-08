// import Button from "../components/Button.jsx";

import CallToAction from "../components/CallToAction.jsx";

const Hero = () => {
  return (
    <section className="bg-l1 w-9/12 mx-auto relative flex justify-center items-start gap-5 px-2 py-12">
      <div className="flex flex-col max-w-lg py-2">
        <p className="highlight">Perfect for dessert lovers! Now you can...</p>
        <p className="font-bold text-5xl py-4 uppercase leading-tight">
          Create Irresistible Frozen Delights with Ease and Confidence
          <div className="py-2" />
          <span className="text-3xl">—Right from Your Kitchen!</span>
        </p>
        <CallToAction />
      </div>
      <div className="rounded-md rotate-3 border-none">
        <img
          src="/images/hero.jpg"
          alt="hero"
          className="h-auto max-h-[450px] rounded-s-md "
        />
        <div className="h-4 w-full bg-white rounded-s-md"></div>
      </div>
    </section>
  );
};
export default Hero;
