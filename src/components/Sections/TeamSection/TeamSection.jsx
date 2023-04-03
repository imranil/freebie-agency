import ProfileList from '../../ProfileList/ProfileList';
import SectionTitle from '../../SectionTitle/SectionTitle';
import Container from '../../UI/Container/Container';
import ProfileOne from '../../../assets/Profile-one.jpg';
import ProfileTwo from '../../../assets/Profile-two.jpg';
import ProfileThree from '../../../assets/Profile-three.jpg';
import './team-section.css';




const items = [
    {
        image: ProfileOne,
        name: 'Austin Wade',
        profession: 'Web Designer',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: ProfileTwo,
        name: 'Jake Nackos',
        profession: 'Creative Director',
        description: 'Create with simplicity in mind!',
    },
    {
        image: ProfileThree,
        name: 'Ian Dooley',
        profession: 'Developer',
        description: 'Lorem ipsum dolor sit amet.',
    },
]


const TeamSection = () => {

    return (
        <section className="team-section">
            <Container>
                <SectionTitle title="The Team" />
                <ProfileList profiles={items}/>
            </Container>
        </section>
    );
}

export default TeamSection;