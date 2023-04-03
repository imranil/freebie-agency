import SectionTitle from '../../SectionTitle/SectionTitle';
import Container from '../../UI/Container/Container';
import ServiceList from '../../ServiceList/ServiceList';
import BrandingIcon from '../../../assets/icons/branding.svg';
import DesignIcon from '../../../assets/icons/design-tool.svg';
import DevelopmentIcon from '../../../assets/icons/development.svg';
import './services-section.css';


const items = [
    {
        title: 'Branding',
        icon: BrandingIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
        title: 'Design',
        icon: DesignIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
        title: 'Development',
        icon: DevelopmentIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
]


const ServicesLayout = () => {


    return (
        <section className="services">
            <Container>
                <SectionTitle title="Our Services" />
                <ServiceList services={items} />
            </Container>
        </section>
    );
}

export default ServicesLayout;