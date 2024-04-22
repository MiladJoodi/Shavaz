import Image from "next/image";
import { Heart, LogIn, Search, ShoppingCart } from 'lucide-react';

const HeaderTop = () => {
    return (
        <div className="flex items-center px-4  py-2 md:py-5 justify-between gap-8">

          <div className="flex items-center gap-8 lg:gap-16 flex-1">
            {/* Logo */}
            <div>
              <Image
                src="/logo.svg"
                width={120}
                height={60}
                alt="logo"
              />
            </div>

            {/* Search */}
            <div className="header_search flex items-center relative w-full">
              <Search size={20} className="absolute right-2 text-gray-400" />
              <input
                type="text"
                className="bg-gray-100 pr-8 rounded-md p-2.5 text-sm outline-none text-black w-full md:w-[75%]"
                placeholder="جستجو در شاواز"
              />
            </div>
          </div>

          {/* Login */}
          <div className="hidden md:flex items-center justify-center gap-4 flex-0">
            <div className="flex py-1 px-3 gap-1 items-center text-gray-400 justify-center text-[14px] border rounded-md cursor-pointer">
              <LogIn size={20} />
              <span>ورود | ثبت نام</span>
            </div>

            <div className="text-gray-400 flex gap-3 ">
              <div className="border-r" />
              <Heart size={20} className="cursor-pointer" />
              <div className="border-r" />
              <ShoppingCart size={20} className="cursor-pointer" />
            </div>
          </div>

        </div>
    );
}

export default HeaderTop;