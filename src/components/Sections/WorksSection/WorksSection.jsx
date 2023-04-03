import SectionTitle from '../../SectionTitle/SectionTitle';
import WorksList from '../../WorksList/WorksList';
import Container from '../../UI/Container/Container';
import WorkCamera from '../../../assets/Work-camera.jpg';
import WorkCat from '../../../assets/Work-cat.jpg';
import WorkComputer from '../../../assets/Work-computer.jpg';
import WorkDesk from '../../../assets/Work-desk.jpg';
import './works-section.css';
import CategoriesList from '../../CategoriesList/CategoriesList';
import { useEffect, useState } from 'react';



const Categories = {
    ALL: 'ALL',
    WEB_DESIGN: 'WEB DESIGN',
    BRANDING: 'BRANDING',
    PHOTOGRAPHY: 'PHOTOGRAPHY',
    ILLUSTRATION: 'ILLUSTRATION'
}


const items = [
    {
        image: WorkCat,
        title: 'A KITTEN’S LIFE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        category: Categories['ILLUSTRATION']
    },
    {
        image: WorkCamera,
        title: '100 YEARS PHOTOGRAPHY',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        category: Categories['PHOTOGRAPHY']
    },
    {
        image: WorkComputer,
        title: 'APPLE’S LOST MAGIC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        category: Categories['BRANDING']
    },
    {
        image: WorkDesk,
        title: 'GROOVEMADE PRODUCTS FOR MAC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        category: Categories['WEB_DESIGN']
    },
    {
        image: WorkCat,
        title: 'A KITTEN’S LIFE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        category: Categories['WEB_DESIGN']
    },
    {
        image: WorkCamera,
        title: '100 YEARS PHOTOGRAPHY',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        category: Categories['BRANDING']
    },
    {
        image: WorkComputer,
        title: 'APPLE’S LOST MAGIC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        category: Categories['PHOTOGRAPHY']
    },
    {
        image: WorkDesk,
        title: 'GROOVEMADE PRODUCTS FOR MAC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        category: Categories['ILLUSTRATION']
    },
]


const WorksSection = () => {
    const STEP = 4;

    const [activeCategory, setActiveCategory] = useState(null);
    const [displayedList, setDisplayedList] = useState([]);

    useEffect(() => {
        setActiveCategory(Categories['ALL']);
        setDisplayedList(items.slice(0, STEP));
    }, []);

    useEffect(() => {
        if (activeCategory !== Categories['ALL']) {
            setDisplayedList(items.filter(item => item.category === activeCategory).slice(0, STEP));
        } else {
            setDisplayedList(items.slice(0, STEP));
        }
    }, [activeCategory]);

    function hasDisplayedItems() {
        if (activeCategory === Categories['ALL']) {
            return displayedList.length < items.length;
        } else {
            return displayedList.length < items.filter(item => item.category === activeCategory).length;
        }
    }

    function viewMore() {
        if (activeCategory !== Categories['ALL']) {
            setDisplayedList(items.filter(item => item.category === activeCategory).slice(0, displayedList.length + STEP));
        } else {
            setDisplayedList(items.slice(0, displayedList.length + STEP));
        }
    }


    return (
        <section className="works-section">
            <Container>
                <div className="works-section-header">
                    <SectionTitle title="Latest Works" />
                    <CategoriesList
                        categories={Categories}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />
                </div>
                <WorksList works={displayedList} />
                {(hasDisplayedItems()) &&
                    <div className="btn-area">
                        <button onClick={viewMore} className="view-more">view more</button>
                    </div>
                }
            </Container>
        </section>
    );
}

export default WorksSection;