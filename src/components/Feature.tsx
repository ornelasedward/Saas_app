import Image from "next/image";
import photo from "@/images/dashboard.png";

export function Feature() {
  return (
    <div className="max-w-[1280px] m-auto">
      <div className=" bg-sky-900 border-2 h-screen rounded-3xl m-8 p-8 overflow-hidden">
        <div className="text-center p-8 text-white">
          <h1 className="text-4xl font-bold">
            Boost your productivity. Start using our app today.
          </h1>
          <p className="pt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <Image
            src={photo}
            alt="Dashboard"
            className="absolute top-0 left-0 w-[57rem] max-w-none rounded-2xl lg:hidden"
          />
          <Image
            src={photo}
            alt="Dashboard"
            className="text-center justify-center items-center w-[70rem] max-w-none rounded-2xl lg:flex hidden m-auto"
          />
        </div>
      </div>
    </div>
  );
}
