

const WorkCard = ({ work: { image, title, description, category } }) => {

    return (
        <div className="work-card">
            <div className="work-header">
                <img src={image} alt={title} className="work-image" />
                <div className="work-title">
                    {title}
                </div>
            </div>
            <div className="work-body">
                <div className="work-category">
                    {category}
                </div>
                <div className="work-description">
                    {description}
                </div>
                <a className="work-card-link">
                    READ MORE
                </a>
            </div>
        </div>
    );
}

export default WorkCard;