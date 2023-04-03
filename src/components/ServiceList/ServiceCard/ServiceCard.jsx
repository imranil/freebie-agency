

const ServiceCard = ({ service: {title, icon, description}}) => {
    return (
        <div className="service-card">
            <div className="service-card-content">
                <div className="service-card-header">
                    <div className="service-card-title">
                        {title}
                    </div>
                    <div className="service-card-icon">
                        <img src={icon} alt={title} />
                    </div>
                </div>
                <div className="service-card-body">
                    {description}
                </div>
                <div className="service-card-footer">
                    <a href="#">READ MORE</a>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;