import { faq } from "../constants/index.jsx";

const Faq = () => {
  return (
    <section className="w-9/12 mx-auto mt-3">
      {faq.map(({ question, answer }) => (
        <div key={question}>
          <p className="bg-l1 after:content-['+'] after:font-bold after:text-3xl after:text-p12 after:hover:text-p30 transition-colors duration-500 flex justify-between p-3 text-2xl rounded-md">
            {question}
          </p>
          <p className="p-3 mt-3">{answer}</p>
        </div>
      ))}
    </section>
  );
};
export default Faq;
