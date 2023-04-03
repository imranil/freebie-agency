import WorkCard from './WorkCard/WorkCard';
import './works-list.css';


const WorksList = ({ works }) => {


    function renderWorksList() {
        const list = [];

        for (let i = 0; i < works.length; i++) {
            list.push(<WorkCard key={`work-card-${i}`} work={works[i]} />)
        }

        return list;
    }

    return (
        <div className="works-list">
            {renderWorksList()}
        </div>
    );
}

export default WorksList;