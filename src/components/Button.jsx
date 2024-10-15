import clsx from "clsx";

const Button = ({
  children,
  icon,
  href,
  onClick,
  additionalClassName,
  ...props
}) => {
  const Inner = () => (
    <span>
      {icon && <img src={icon} alt="icon" />}
      <span>{children}</span>
    </span>
  );
  return href ? (
    <a
      href={href}
      className={clsx(
        "bg-transparent uppercase font-mono px-3 py-1.5 rounded-md ",
        additionalClassName
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      onClick={onClick}
      className={clsx(
        "bg-transparent uppercase font-mono px-3 py-1.5 rounded-md ",
        additionalClassName
      )}
      {...props}
    >
      <Inner />
    </button>
  );
};
export default Button;
