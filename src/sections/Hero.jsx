// import Button from "../components/Button.jsx";

import CallToAction from "../components/CallToAction.jsx";

const Hero = () => {
  return (
    <section className="bg-l1 w-full lg:w-9/12 mx-auto relative gap-5 px-2 py-12">
      <div className="w-full flex justify-center items-start">
        <div className="flex flex-col max-w-lg py-2 w-1/2 md:w-auto ps-4">
          <p className="highlight">
            Perfect for dessert lovers! Now you can...
          </p>
          <p className="font-bold text-2xl md:text-5xl py-4 uppercase leading-tight ">
            Create Irresistible Frozen Delights with Ease and Confidence
            <div className="py-2" />
            <span className="text-sm md:static md:text-2xl lg:text-3xl">
              —Right from Your Kitchen!
            </span>
          </p>
          <div className="hidden md:block">
            <CallToAction />
          </div>
        </div>
        <div className="rounded-md rotate-3 pe-4 relative ms-3 md:ms-0">
          <img
            src="/images/hero.jpg"
            alt="hero"
            className="h-auto max-h-72 md:max-h-[450px] rounded-s-md "
          />
          <div className="h-4 w-full bg-white rounded-s-md"></div>
        </div>
      </div>

      <div className="block md:hidden">
        <CallToAction />
      </div>
    </section>
  );
};
export default Hero;
