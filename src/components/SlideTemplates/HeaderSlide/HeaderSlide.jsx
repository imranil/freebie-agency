import Container from '../../UI/Container/Container';
import './header-slide.css';


const HeaderSlide = ({ data: { url, title, description } }) => {
    return (
        <>
            <img src={url} alt={title} className="header-slide-image" />
            <div className="header-slide-text">
                <Container>
                    <div className="header-slide-title">
                        {title}
                    </div>
                    <div className="header-slide-description">
                        {description}
                    </div>
                </Container>
            </div>
        </>
    );
}

export default HeaderSlide;