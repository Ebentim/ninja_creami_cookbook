import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Button from "./Button.jsx";
import button from "./Button.jsx";

const Card = ({
  icon,
  image,
  title,
  highlight,
  desc,
  name,
  additionalClassName,
  button,
}) => {
  const Inner = () => (
    <span>
      {icon && (
        <span
          className={"flex flex-col justify-between items-start gap-8 h-full"}
        >
          <h4 className="highlight mt-32">{highlight}</h4>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-medium">
            {title}
          </h4>
          <FontAwesomeIcon
            icon={icon}
            className="absolute text-4xl border-2 rounded-full p-2 border-p16 top-10 left-10 bg-l2"
          />
          <p className="text-xl lg:text-2xl">{desc}</p>
        </span>
      )}
      {image && (
        <span className="flex gap-3 justify-center items-center">
          <div className="hidden md:block w-36 h-36 z-10">
            <img
              src={image}
              alt={name}
              height={128}
              width={128}
              className="h-full w-40 bg-l2"
            />
          </div>
          <div>
            <p className="text-sm leading-snug">{desc}</p>
            <p className="highlight">{name}</p>
          </div>
        </span>
      )}
      {/*additionalClassName={
                "bg-t10 border-s1 border hover:bg-s1 hover:text-p1 transition-colors duration-500 w-36 md:text-base text-center"
              }*/}
      {button && (
        <Button additionalClassName="border bg-s1 absolute bottom-4 hover:text-p1 bg-t10 border-s1 border hover:bg-s1 hover:text-p1 transition-colors duration-500 w-36 md:text-base text-center">
          {button}
        </Button>
      )}
    </span>
  );
  return (
    <div
      className={clsx(
        "transition-all duration-500 ease-in-out border border-p20 hover:border-p32 relative rounded-lg flex flex-col items-center justify-start",
        additionalClassName,
      )}
    >
      <div
        className={clsx(
          "h-16 w-0.5 bg-p16 absolute left-16",
          image && "hidden",
        )}
      />
      <Inner />
    </div>
  );
};
export default Card;
