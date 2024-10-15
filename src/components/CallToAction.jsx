import Button from "./Button.jsx";
import { brands } from "../constants/index.jsx";

const CallToAction = () => {
  return (
    <section className="py-3 bg-transparent rounded-lg transition-colors duration-500 ease-in-out">
      <div className="flex justify-center md:justify-start items-center gap-3 flex-wrap w-full">
        {brands.map(({ src, alt, href }) => (
          <a
            key={src}
            href={href}
            className={`flex justify-start items-center flex-col-reverse w-36 gap-3`}
            target="_blanc"
          >
            <img
              src={src}
              alt={alt}
              className={" h-12 bg-white px-3 rounded-md w-full hidden md:flex"}
            />
            <Button
              additionalClassName={
                "bg-t10 border-s1 border hover:bg-s1 hover:text-p1 transition-colors duration-500 w-36 text-sm md:text-base text-center"
              }
            >
              {alt === "buy on amazon"
                ? "buy on amazon"
                : alt === "buy kindle"
                  ? " buy kindle"
                  : "buy on selar"}
            </Button>
          </a>
        ))}
      </div>
    </section>
  );
};
export default CallToAction;
