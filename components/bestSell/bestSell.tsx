"use client"

import Container from "../container/container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import persianNumber from "@/utils/persianNumber";
import { shimmer, toBase64 } from "@/utils/shimmer";


const bestSell = [
    {
        image: "/bestSell/01.webp",
        title: "سرم احیا کننده ابرو سریتا ظرفیت 10 میلی لیتر",
        price: 229925,
        oldPrice: 459850,
        percent: 50,
        hashtag: "#1"
    },
    {
        image: "/bestSell/02.webp",
        title: "فلوئید ضدآفتاب فاقد چربی مای بی رنگ SPF 50 ظرفیت 50 میلی لیتر",
        price: 367880,
        oldPrice: 459850,
        percent: 20,
        hashtag: "#2"
    },
    {
        image: "/bestSell/03.webp",
        title: "سرم روشن کننده پوست پرایم مدل C_Prime ظرفیت 30 میلی لیتر",
        price: 7200,
        oldPrice: 12000,
        percent: 40,
        hashtag: "#3"
    },
    {
        image: "/bestSell/04.webp",
        title: "شامپو ضد ريزش مو سریتا حاوی عصاره کافئین ظرفیت 200 میلی لیتر",
        price: 210000,
        oldPrice: 262500,
        percent: 20,
        hashtag: "#4"
    },
    {
        image: "/bestSell/05.webp",
        title: "کرم دور چشم درمالیفت مدل Eyelift Eye Contour ظرفیت 20 میلی لیتر",
        price: 68900,
        oldPrice: 79200,
        percent: 13,
        hashtag: "#5"
    },
    {
        image: "/bestSell/06.webp",
        title: "کرم ضد آفتاب لافارر مناسب برای پوست چرب SPF 50 ظرفیت 40 میلی لیتر",
        price: 191800,
        oldPrice: 319700,
        percent: 13,
        hashtag: "#6"
    }
]


const BestSell = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        afterChange: function (index: any) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };

    return (
        <div className="mt-10">
            <Container>
                <div className="slider-container overflow-x-hidden">
                    <Slider {...settings}>
                        {bestSell.map((item, index) => (
                            <div key={index} className="relative overflow-hidden !flex flex-col items-center gap-12 bg-white rounded-lg px-2 py-6 border cursor-pointer">
                                
                                <div className="triangle rounded-tr-lg">
                                    <span className="text-white absolute top-[-17px]">{persianNumber(item.hashtag)}</span>
                                </div>

                                <Image
                                    src={item.image}
                                    placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                    alt='prize'
                                    width={200}
                                    height={200}
                                    className="w-[110px]"
                                />
                                <p className="text-sm text-right text-[#646464] leading-6 line-clamp-2">{item.title}</p>
                                <div className="flex flex-col w-full gap-1">
                                    <div className="flex justify-between ">
                                        <div className="flex items-center gap-1  text-[#d72685]">
                                            <span className="text-sm">تومان</span>
                                            <span className="text-lg">{persianNumber(item.price)}</span>
                                        </div>

                                        <span className="text-xs bg-[#d72685] text-white rounded-md flex items-center px-1">
                                            {persianNumber(item.percent)}%
                                        </span>
                                    </div>
                                    <span className="flex items-center gap-1 text-gray-400 self-start text-xs font-light line-through">
                                        <span>تومان</span>
                                        <span className="text-md">{persianNumber(item.oldPrice)}</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    );
}

export default BestSell;