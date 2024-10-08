import { features } from "../constants/index.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

const Features = () => {
  return (
    <section>
      <div className="w-9/12 mx-auto bg-l2 mt-3 flex justify-center items-center flex-col max-md:flex-col md:flex-row">
        {features.map(({ icon, highlight, title, desc, button }) => (
          <Card
            key={title}
            icon={icon}
            title={title}
            desc={desc}
            highlight={highlight}
            additionalClassName={
              "bg-transparent w-1/2 h-[500px] border-p20 hover:border-p32 px-9"
            }
            button={button}
          />
        ))}
      </div>
    </section>
  );
};
export default Features;
