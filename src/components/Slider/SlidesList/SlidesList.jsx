import { useContext } from "react";
import { SliderContext } from "../Slider";
import Slide from "./Slide/Slide";


const SlidesList = () => {
    const { slideNumber, items } = useContext(SliderContext);

    return (
        <div
            className="slides-list"
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
            {items.map((slide, index) => (
                <Slide key={index} data={slide} />
            ))}
        </div>
    );
}

export default SlidesList;