import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";
interface Music {
    title?: string;
    description ?: string;
    
}

export const Card = ({title,description}:Music)=>{
    

    return (
        <BackgroundGradient className="h-auto w-auto flex flex-col justify-center items-start p-4 rounded-xl">
            {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
            {description && <p className="text-gray-600 mb-4">{description}</p>}
            <Button 
             borderRadius={"1rem"}
            className="bg-white rounded-xl shadow">
            Learn More
            </Button>
        </BackgroundGradient>
    )
}