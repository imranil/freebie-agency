import './section-title.css';

const SectionTitle = ({ title="" }) => {
    return (
        <h2 className="section-title">
            {title}
        </h2>
    );
}

export default SectionTitle;