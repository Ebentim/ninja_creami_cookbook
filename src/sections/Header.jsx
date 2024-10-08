import Button from "../components/Button.jsx";

const Header = () => {
  return (
    <header className="w-full px-3 bg-transparent sticky top-0 z-10 bg-l1">
      <div className="flex justify-between items-center mx-auto text-white lg:w-9/12 h-24 px-6">
        <h1 className="font-bold text-2xl">Ninja Creami Cookbook</h1>
        <Button additionalClassName={"bg-s1 text-2xl"}>Get your copy</Button>
      </div>
    </header>
  );
};
export default Header;
