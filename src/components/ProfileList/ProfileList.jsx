import ProfileCard from './ProfileCard/ProfileCard';
import './profile-list.css';


const ProfileList = ({profiles}) => {

    function renderProfileList() {
        const list = [];

        for (let i = 0; i < profiles.length; i++) {
            list.push(<ProfileCard key={`profile-card-${i}`} profile={profiles[i]}/>)
        }

        return list;
    }

    return (
        <div className="profile-list">
            {renderProfileList()}
        </div>
    );
}

export default ProfileList;