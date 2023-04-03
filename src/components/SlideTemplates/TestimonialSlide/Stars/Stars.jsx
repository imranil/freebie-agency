import './stars.css';


const Stars = ({grade}) => {
    const MAX_AMOUNT = 5;

    function renderStarList() {
        const list = [];

        for(let i = 0; i < MAX_AMOUNT; i++) {
            list.push(<div 
                key={`star-${i}`} 
                className={`star ${itBelongsToScore(i) ? 'active' : ''}`} 
            />)
        }

        return list;
    }

    function itBelongsToScore(index) {
        return (index + 1) <= grade;
    }

    return (
        <div className="stars">
            {renderStarList()}
        </div>
    );
}

export default Stars;