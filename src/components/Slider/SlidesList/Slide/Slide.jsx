import { useContext } from "react";
import { SliderContext } from "../../Slider";


const Slide = ({ data }) => {
    const { SlideTemplate } = useContext(SliderContext);

    return (
        <div className="slide">
            <SlideTemplate data={data}/>
        </div>
    );
}

export default Slide;