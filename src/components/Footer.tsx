import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export function Footer() {
  return (
    <div className="bg-sky-900">
      <div className="max-w-[1280px] m-auto">
        <div className="flex items-center justify-between p-4">
          <div className="p-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333"
              alt="logo"
              className="h-10 w-10"
            />
          </div>
          <div className="grid gap-2">
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
          <div className="grid gap-2">
            <a href="#" className="text-white">
              Blog
            </a>
            <a href="#" className="text-white">
              Privacy
            </a>
            <a href="#" className="text-white">
              Contact
            </a>
            <a href="#" className="text-white">
              Terms
            </a>
          </div>
          <div className="text-white flex gap-2">
            <BsTwitter className="w-5 h-10" />
            <AiFillFacebook className="w-5 h-10" />
            <AiFillInstagram className="w-5 h-10" />
            <AiFillLinkedin className="w-5 h-10" />
          </div>
        </div>
        <div className="mt-16 border-t border-white pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-white pb-2">
            &copy; 2023 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
