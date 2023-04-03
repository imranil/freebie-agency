import { useContext } from 'react';
import { SliderContext } from '../../Slider';
import Dot from './Dot/Dot';
import './dots.css';

const Dots = () => {
    const { slidesCount } = useContext(SliderContext);

    function renderDots() {
        const dots = [];

        for (let i = 0; i < slidesCount; i++) {
            dots.push(<Dot key={`dot-${i}`} number={i} />);
        }

        return dots;
    }

    return (
        <div className="dots">
            {renderDots()}
        </div>
    );
}

export default Dots;