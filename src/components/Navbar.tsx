import { AiOutlineMenu } from "react-icons/ai";

export function Navbar() {
  return (
    <div className="bg-sky-900">
      <div className="max-w-[1280px] m-auto lg:grid lg:grid-cols-3 gap-4 items-center flex justify-between">
        <div className="p-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333"
            alt="logo"
            className="h-10 w-10"
          />
        </div>
        <div className="lg:flex gap-8 hidden">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            team
          </a>
          <a href="#" className="text-white">
            about
          </a>
          <a href="#" className="text-white">
            calendar
          </a>
        </div>
        <div className="lg:flex gap-4 hidden">
          <button className="rounded-lg p-4 text-white shadow-lg w-32 h-10 items-center justify-center flex">
            login
          </button>
          <button className="rounded-lg p-4 bg-sky-500 text-white shadow-lg w-32 h-10 items-center justify-center flex">
            Sign up!
          </button>
        </div>
        <div className="text-white items-center justify-center flex lg:hidden pr-4">
          <AiOutlineMenu className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
}
