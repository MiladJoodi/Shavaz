import { BadgePercent, Flame, Menu, Phone, Store, Zap } from "lucide-react";
import Link from "next/link";

const navbarLinks = [
    {
        icon: <Menu size={19} />,
        title: "دسته‌بندی‌ها",
        url: "/"
    },
    {
        icon: <Zap size={19} />,
        title: "پرفروش‌ترین‌های هفته",
        url: "/"
    },
    {
        icon: <BadgePercent size={19} />,
        title: "محصولات تخفیف‌دار",
        url: "/"
    },
    {
        icon: <BadgePercent size={19} />,
        title: "بلاگ",
        url: "/"
    },
    {
        icon: <Phone size={19} />,
        title: "تماس با ما",
        url: "/"
    },
    {
        icon: <Store size={19} />,
        title: "درباره ما",
        url: "/"
    }
]

const HeaderBotton = () => {
    return (
        <div className="hidden lg:flex justify-between items-center ">
            <div className="flex items-center gap-8 p-4 text-gray-500 text-sm">
                {navbarLinks.map((item, index) => (
                    <Link
                        href={item.url}
                        className="flex gap-2"
                    >
                        {item.icon}
                        {item.title}
                    </Link>
                ))}
            </div>

            <span className="flex gap-2 items-center text-[#d72685] cursor-pointer">
                <Flame />
                فروش ویژه
            </span>

        </div>
    );
}

export default HeaderBotton;