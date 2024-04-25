import Image from "next/image";
import Container from "../container/container";
import { shimmer, toBase64 } from "@/utils/shimmer";


const categoryItems = [
    {
        image: "01.webp",
        title: "آرایش چشم"
    },
    {
        image: "02.webp",
        title: "دهان و دندان"
    },
    {
        image: "03.webp",
        title: "عطر و ادکلن"
    },
    {
        image: "04.webp",
        title: "رنگ مو"
    },
    {
        image: "05.webp",
        title: "لاک"
    },
    {
        image: "06.webp",
        title: "مایع ضدعفونی کننده"
    },
    {
        image: "07.webp",
        title: "پاک کننده آرایش"
    },
    {
        image: "08.webp",
        title: "لوسیون و روغن بدن"
    },
    {
        image: "09.webp",
        title: "آرایش لب"
    },
    {
        image: "10.webp",
        title: "دستمال مرطوب"
    },
    {
        image: "11.webp",
        title: "ماسک مو"
    },
    {
        image: "12.webp",
        title: "ضد تعریق"
    },
    {
        image: "13.webp",
        title: "نوار بهداشتی"
    },
    {
        image: "14.webp",
        title: "آرایش صورت"
    },

]

const Category = () => {
    return (
        <div className="mt-10">
            <Container>
                <div className="flex flex-col gap-10">
                    <h4 className="text-center text-2xl text-[#646464]">دسته‌بندی ها</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-4	">
                        {categoryItems.map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-5">
                                <div className="relative w-[110px] h-[110px]">
                                    <Image
                                        src={`/category/` + item.image}
                                        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                        alt=""
                                        fill
                                        className="hover:scale-110 transition-all duration-300 ease-in-out delay-150 cursor-pointer rounded-full"
                                    />
                                </div>

                                <span className="text-xs text-[#646464]">{item.title}</span>
                            </div>
                        ))}

                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Category;