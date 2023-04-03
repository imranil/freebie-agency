import Slider from '../../Slider/Slider';
import TestimonialSlide from '../../SlideTemplates/TestimonialSlide/TestimonialSlide';
import Container from '../../UI/Container/Container';
import './testimonial-section.css';


const items = [
    {
        name: 'Austin Wade',
        profession: 'Web Designer',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure incidunt officia eaque quis praesentium odit asperiores voluptas a sed perferendis enim quam, aperiam ab exercitationem tempora beatae hic sit.',
        grade: 4.5,
    },
    {
        name: 'Jake Nackos',
        profession: 'Creative Director',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure incidunt officia eaque quis praesentium odit asperiores voluptas a sed perferendis enim quam, aperiam ab exercitationem tempora beatae hic sit.',
        grade: 5,
    },
    {
        name: 'Ian Dooley',
        profession: 'Developer',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure incidunt officia eaque quis praesentium odit asperiores voluptas a sed perferendis enim quam, aperiam ab exercitationem tempora beatae hic sit.',
        grade: 4,
    },
]


const TestimonialSection = () => {

    return (
        <section className="testimonial-section">
            <Container>
                <Slider
                    items={items}
                    SlideTemplate={TestimonialSlide}
                />
            </Container>
        </section>
    );
}

export default TestimonialSection;