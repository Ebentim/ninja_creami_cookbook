import Button from "../components/Button.jsx";

const Header = () => {
  return (
    <header className="w-full px-3 bg-transparent sticky top-0 z-50 bg-l1">
      <div className="flex justify-between items-center mx-auto text-white lg:w-9/12 h-24 md:px-6">
        <h1 className="font-bold text-base md:text-2xl">
          Ninja Creami Cookbook
        </h1>
        <Button
          additionalClassName="bg-t10 border-s1 border hover:bg-s1 hover:text-p1 transition-colors duration-500 w-36 text-[12px] text-center"
          href="#call-to-actions"
        >
          Get your copy
        </Button>
      </div>
    </header>
  );
};
export default Header;
