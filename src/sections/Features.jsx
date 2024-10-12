import { features } from "../constants/index.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

const Features = () => {
  return (
    <section>
      <div className="w-[95%] lg:w-9/12 mx-auto bg-l2 mt-3 flex justify-center items-center flex-col md:flex-row">
        {features.map(({ icon, highlight, title, desc, button, href }) => (
          <Card
            key={title}
            icon={icon}
            title={title}
            desc={desc}
            highlight={highlight}
            additionalClassName={
              "bg-transparent w-full md:w-1/2 h-[500px] px-9"
            }
            button={button}
            href={"#call-to-actions"}
          />
        ))}
      </div>
    </section>
  );
};
export default Features;
