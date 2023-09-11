import NextLink from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-400 px-8 py-4">
      <div>
        <NextLink href={"/"} passHref>
          <span className="inline-flex items-center font-bold text-xl cursor-pointer">
            Refid β
          </span>
        </NextLink>
      </div>
    </div>
  );
};

export default Header;
