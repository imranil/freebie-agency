import Navbar from "../../Navbar/Navbar";
import Slider from "../../Slider/Slider";
import HeaderSlide from "../../SlideTemplates/HeaderSlide/HeaderSlide";
import SlideOne from '../../../assets/Slide-one.jpg';
import SlideTwo from '../../../assets/Slide-two.jpg';
import SlideThree from '../../../assets/Slide-three.jpg';
import './header.css';


const items = [
    {
        url: SlideOne,
        title: 'WHERE GREAT IDEAS COME TO LIFE',
        description: 'Passionate creative studio helping startups grow their business!',
    },
    {
        url: SlideTwo,
        title: 'WHERE GREAT IDEAS COME TO LIFE',
        description: 'Passionate creative studio helping startups grow their business!',
    },
    {
        url: SlideThree,
        title: 'WHERE GREAT IDEAS COME TO LIFE',
        description: 'Passionate creative studio helping startups grow their business!',
    },
]


const HeaderLayout = () => {
    return (
        <header>
            <Navbar />
            <Slider
                items={items}
                SlideTemplate={HeaderSlide}
                height="100vh"
            />
        </header>
    );
}

export default HeaderLayout;