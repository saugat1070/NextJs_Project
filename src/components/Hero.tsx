import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Boxes } from "./ui/background-boxes"
import { cn } from "@/lib/utils";
import { Button } from "./ui/moving-border";

export function HeroSection(){
    return (
        <div className="min-h-screen md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <div className="p-4 relative  w-full text-center">
                <Boxes/>
                <h1 className={cn("relative mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 z-20")}>Master the art of music</h1>
                <p className="relative mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto z-20">
                    Dive into our comprehensive music courses and 
                    transform your musical journey today. Whether you're 
                    beginner or looking to refine your skils,join us to 
                    unlock your true potential.
                </p>
                <div className="mt-4 z-20">
                    <Link href={"/courses"}>
                    <Button className="bg-black w-auto ">Explore Coureses
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}