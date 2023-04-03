import './about-section.css';
import AboutOne from '../../../assets/Aboute-one.jpg';
import AboutTwo from '../../../assets/Aboute-two.jpg';
import Container from '../../UI/Container/Container';


const AboutLayout = () => {
    return (
        <section className="about">
            <Container>
                <div className="about-content">
                    <div className="about-box">
                        <div className="text">
                            <div className="about-title">
                                <div className="first">WE ARE</div>
                                <div className="second">THE SQWD</div>
                            </div>
                            <div className="small-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </div>
                        </div>
                        <img src={AboutOne} alt="about" />
                    </div>
                    <div className="about-green-box"> </div>
                    <div className="about-box">
                        <div className="small-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </div>
                        <img src={AboutTwo} alt="about" />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default AboutLayout;