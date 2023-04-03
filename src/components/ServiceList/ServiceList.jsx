import ServiceCard from './ServiceCard/ServiceCard';
import './service-list.css';


const ServiceList = ({ services }) => {

    function renderServiceList() {
        const list = [];

        for (let i = 0; i < services.length; i++) {
            list.push(<ServiceCard key={`service-card-${i}`} service={services[i]} />)
        }

        return list;
    }

    return (
        <div className="service-list">
            {renderServiceList()}
        </div>
    );
}

export default ServiceList;