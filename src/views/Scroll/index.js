import { useScroll } from "./useScroll";

import { scroll, text_container, title, inside_border, outside_border } from './index.module.scss';

const Scroll = () => {
    const { y } = useScroll();
    const limitation = 200;

    return (
        <div
            className={scroll}
        >
            <div className={text_container}>
                <h1
                    className={title}
                >
                    스크롤 Y: {y}
                </h1>
                <h1
                    className={title}
                >
                    경계선: {limitation}
                </h1>
                <h1
                    className={`${title} ${y > limitation ? inside_border : outside_border}`}
                >
                    {y > limitation
                        ? "초과"
                        : "정상"
                    }
                </h1>
            </div>
        </div>
    );
}

export default Scroll;