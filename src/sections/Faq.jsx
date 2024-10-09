import { faq } from "../constants/index.jsx";
import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="w-[95%] lg:w-9/12 mx-auto mt-3">
      <h4 className="highlight text-center">FAQ</h4>
      {faq.map(({ question, answer }, index) => (
        <div key={question}>
          <p
            className={`
              bg-l1 cursor-pointer after:font-bold after:text-3xl after:text-p12 after:hover:text-p30 transition-colors duration-500 flex justify-between p-3 text-base lg:text-2xl rounded-md
            `}
            onClick={() => handleClick(index)}
          >
            {question}
          </p>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="p-3 mt-3 text-sm lg:text-base text-s10">{answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Faq;
