import { useTab } from './useTab';

const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2"
    },
];

const Tab = () => {
    const { currentItem, changeItem } = useTab(0, content);

    return (
        <div>
            {content.map((section, index) => (
                <button
                    onClick={() => changeItem(index)}
                    key={index}
                >
                    {section.tab}
                </button>
            ))}
            <div>
                {currentItem.content}
            </div>
        </div>
    );
}

export default Tab;