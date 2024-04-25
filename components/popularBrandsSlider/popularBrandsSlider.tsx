"use client"

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from "../container/container";

const popularBrands = [
    {image:"/brands/01.webp"},
    {image:"/brands/02.webp"},
    {image:"/brands/03.webp"},
    {image:"/brands/04.webp"},
    {image:"/brands/05.webp"},
    {image:"/brands/06.webp"},
    {image:"/brands/07.webp"},
]


const PopularBrandsSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <div className="flex items-center justify-center">
            <Container>
                <div className="slider-container overflow-x-hidden ">
                    <Slider {...settings} className="!flex items-center">
                        {popularBrands.map((item, index)=>(
                            <div className="!flex !items-center justify-center" key={index}>
                            <Image
                                src={item.image}
                                alt='prize'
                                width={180}
                                height={200}
                                className="w-[100px]"
                            />
                        </div>
                        ))}
                        
                       

                    </Slider>
                </div>
            </Container>
        </div>
    );
}

export default PopularBrandsSlider;