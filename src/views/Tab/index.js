import { useTab } from './useTab';
import { tab, tabButtons, tabButton, tabButtonOn, tabButtonText, imageContainer, image } from './index.module.scss';

const tabs = [
    {
        title: "Arctic",
        src: "/image/arctic.jpg",
        alt: "극지방"
    },
    {
        title: "Beach",
        src: "image/beach.jpg",
        alt: "해변"
    },
    {
        title: "Desert",
        src: "image/desert.jpg",
        alt: "사막"
    },
    {
        title: "Jungle",
        src: "image/jungle.jpg",
        alt: "정글"
    },
    {
        title: "Mountain",
        src: "image/mountain.jpg",
        alt: "산"
    },
    {
        title: "Plain",
        src: "image/plain.jpg",
        alt: "평원"
    },
];

const Tab = () => {
    const { currentItem, changeItem, currentIndex } = useTab(0, tabs);

    return (
        <div className={tab}>
            <div
                className={tabButtons}
            >
                {tabs.map((tab, index) => (
                    <button
                        className={`${tabButton} ${currentIndex === index && tabButtonOn}`}
                        key={index}
                        onClick={event => changeItem(index)}
                    >
                        <p
                            className={tabButtonText}
                        >
                            {tab.title}
                        </p>
                    </button>
                ))}
            </div>
            <div className={imageContainer}>
                <img
                    className={image}
                    src={currentItem.src}
                    alt={currentItem.alt}
                />
            </div>
        </div>
    );
}

export default Tab;