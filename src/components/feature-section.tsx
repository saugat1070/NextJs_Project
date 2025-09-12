'use client';


import { data } from "motion/react-client";
import { useEffect, useState } from "react";
import musicD from "../data/music.json";
import { Card } from "./featureCard";

export const Feature = ()=>{
    const [musicData,setMusicData] = useState(musicD?.courses);
    console.log(musicD)
    

    return(
        <div className="min-h-[50vh] max-h-screen bg-gray-900">
            <div className="py-4 text-center space-y-4">
                <div className="text-xl text-teal-600 font-bold">FEATURED COURSES</div>
                <div className="text-teal-600 opacity-[0.9]">Learn with the Best</div>
            </div>
            <div className="flex flex-row w-[70%] space-x-4">
            { musicData.slice(0, 6).map((music, index) => (
                <Card key={index} title={music?.title} description={music?.description}/>
            ))}
            </div>
            <div></div>
        </div>
    )
}