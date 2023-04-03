import { createContext, useEffect, useState } from 'react';
import Arrows from './Controls/Arrows/Arrows';
import SlidesList from './SlidesList/SlidesList';
import Dots from './Controls/Dots/Dots';
import './slider.css';


export const SliderContext = createContext();


const Slider = ({ SlideTemplate, items = [], width = "100%", height = "100%", autoPlay = false, autoPlayTime = 5000 }) => {
    const [slide, setSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null);

    function changeSlide(direction = 1) {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        setSlide(slideNumber);
    }

    function goToSlide(number) {
        setSlide(number % items.length);
    }

    function handleTouchStart(event) {
        const touchDown = event.touches[0].clientX;

        setTouchPosition(touchDown);
    }

    function handleTouchMove(event) {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = event.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }

        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    }

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            changeSlide(1);
        }, autoPlayTime);

        return () => {
            clearInterval(interval);
        };
    }, [items.length, slide]);

    return (
        <div
            style={{ width, height }}
            className="slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}>
            <SliderContext.Provider
                value={{
                    goToSlide,
                    changeSlide,
                    slidesCount: items.length,
                    slideNumber: slide,
                    items,
                    SlideTemplate
                }}
            >
                <Arrows />
                <SlidesList />
                <Dots />
            </SliderContext.Provider>
        </div>
    );
}

export default Slider;