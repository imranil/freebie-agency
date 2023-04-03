

const ProfileCard = ({ profile: { image, name, profession, description } }) => {

    return (
        <div className="profile-card">
            <img src={image} alt={name} className="profile-card-image" />
            <div className="profile-card-text">
                <div className="profile-card-name">
                    {name}
                </div>
                <div className="profile-card-profession">
                    {profession}
                </div>
                <div className="profile-card-description">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;