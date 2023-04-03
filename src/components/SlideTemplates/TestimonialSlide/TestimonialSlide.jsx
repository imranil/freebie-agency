import Stars from './Stars/Stars';
import './testimonial-slide.css';


const TestimonialSlide = ({ data: { name, profession, comment, grade } }) => {
    return (
        <div className="testimonial-slide">
            <div className="comment">
                {comment}
            </div>
            <div className="profile">
                <div className="name">{name}</div>
                <div className="profession"> / {profession}</div>
            </div>
            <div className="grade">
                <Stars grade={grade} />
            </div>
        </div>
    );
}

export default TestimonialSlide;