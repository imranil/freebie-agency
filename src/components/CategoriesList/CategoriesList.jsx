import './categories-list.css';


const CategoriesList = ({ categories, activeCategory, setActiveCategory }) => {

    function isActiveCategory(category) {
        return categories[category] === activeCategory;
    }

    function renderCategoriesList() {
        const list = [];

        for (const category in categories) {
            list.push(<div
                onClick={() => setActiveCategory(categories[category])}
                key={`category-${category}`}
                className={`category-item ${isActiveCategory(category) ? 'active' : ''}`}
            >
                {categories[category]}
            </div>)
        }

        return list;
    }

    return (
        <div className="categories-list">
            {renderCategoriesList()}
        </div>
    );
}

export default CategoriesList;