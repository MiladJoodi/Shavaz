import Image from "next/image";
import Container from "../container/container";

const Banners = () => {
    return (
        <div className="mt-10">
            <Container>
                <div className="flex md:flex-row flex-col justify-center gap-3 md:gap-7 py-4 md:p-4">
                    <div className="relative flex-1 w-full h-auto cursor-pointer">
                        <Image
                            src="/banner1.webp"
                            alt=""
                            width={1000}
                            height={200}
                            className="rounded-xl"
                        />
                    </div>
                    <div className="relative flex-1 w-full h-auto cursor-pointer">
                        <Image
                            src="/banner2.webp"
                            alt=""
                            width={1000}
                            height={200}
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Banners;