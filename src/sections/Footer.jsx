const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <h5 className="text-center pb-5 pt-2 text-[12px]">
      &copy; {year} Ninja Creami Cookbook, All right Reserved
    </h5>
  );
};
export default Footer;
